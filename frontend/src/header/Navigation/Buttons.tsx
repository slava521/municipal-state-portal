import React from "react";
import {Button, ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";

export default function Buttons(){
    return(
        <ButtonGroup variant="text" aria-label="text button group" color='secondary'>
            <Button color="inherit">
                <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    Главная
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/news" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    Новости
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/services" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    Услуги
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/about" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    О нас
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/contacts" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                    Контакты
                </Link>
            </Button>
        </ButtonGroup>
    )
}