import {AppBar, Box, Button, ButtonGroup, Toolbar, Typography} from "@mui/material";
import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import "./header.css"

interface Props {
}

export default class Header extends Component<Props, any> {
    render() {
        return (
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                Cheb.ru
                            </Link>
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
                        </Typography>

                        <Button color="inherit">
                            <Link to="/abc" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                Вход
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/abcd" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                Регистрация
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}