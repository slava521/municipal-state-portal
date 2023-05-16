import {AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import "./header.css"
import NavBar from "./Navigation/NavBar";
import Menu from "./Navigation/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import {isAuthenticated} from "../api/authorisation/isAuthenticated";
import {apiSignOut} from "../api/authorisation/auth";
import Authorized from "./Login/Authorized";
import NotAuthorized from "./Login/NotAuthorized";

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => {
        setOpen(true)
    }

    const closeDrawer = () => {
        setOpen(false)
    }

    const logout=()=>{
        apiSignOut()
    }



    const isTabletOrMobile = useMediaQuery('(max-width: 768px)')
    const isBigScreen = useMediaQuery('(min-width: 769px)')
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {isTabletOrMobile && <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: '2px'}}
                        onClick={openDrawer}
                    >
                        <MenuIcon/>
                    </IconButton>}
                    <Menu open={open} close={closeDrawer}/>
                    <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                        <img src='./logo.png' alt='logo' style={{width:'25px',marginBottom:'4px'}}/>
                    </Link>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                            Cheb.ru
                        </Link>
                        {isBigScreen && <NavBar/>}
                    </Typography>
                    {!isAuthenticated() && <NotAuthorized/>}
                    {isAuthenticated() && <Authorized logout={logout}/>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}