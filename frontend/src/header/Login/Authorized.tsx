import React from "react";
import {Button, IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import {AccountCircle, Notifications} from "@mui/icons-material";

export default function Authorized(props){
    return(
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                title='Ответы на заявки'
            >
                <Link to="/applications" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    <Notifications />
                </Link>
            </IconButton>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                title='Открыть профиль'
            >
                <Link to="/profile" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    <AccountCircle />
                </Link>
            </IconButton>
            <Button color="inherit" onClick={props.logout} >
                <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    Выйти
                </Link>
            </Button>
        </>
    )
}