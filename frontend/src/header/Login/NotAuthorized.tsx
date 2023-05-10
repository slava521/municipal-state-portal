import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export default function NotAuthorized () {
    return(
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
    )
}