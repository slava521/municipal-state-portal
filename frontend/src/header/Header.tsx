import {AppBar, Box, Button, IconButton, Toolbar, Typography, useMediaQuery} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import "./header.css"
import Buttons from "./Navigation/Buttons";
import Menu from "./Navigation/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import {isAuthenticated} from "../authorisation/isAuthenticated";
import {AccountCircle} from "@mui/icons-material";
import {setAuthToken} from "../authorisation/auth";


export default function Header() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => {
        setOpen(true)
    }

    const closeDrawer = () => {
        setOpen(false)
    }

    const logout=()=>{
        console.log('aaa')
        localStorage.removeItem("token")
        setAuthToken(null)
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
                        sx={{mr: 2}}
                        onClick={openDrawer}
                    >
                        <MenuIcon/>
                    </IconButton>}
                    <Menu open={open} close={closeDrawer}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                            Cheb.ru
                        </Link>
                        {isBigScreen && <Buttons/>}
                    </Typography>
                    {!isAuthenticated() &&
                        <>
                            <Button color="inherit">
                                <Link to="/login" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                    Вход
                                </Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/registration" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                    Регистрация
                                </Link>
                            </Button>
                        </>
                    }
                    {isAuthenticated() &&
                        <>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <Link to="/profile" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                    <AccountCircle />
                                </Link>
                            </IconButton>
                            <Button color="inherit" onClick={logout} >
                                <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                    Выйти
                                </Link>
                            </Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}