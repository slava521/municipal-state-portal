import React from "react";
import {Box, Drawer, List, ListItem, ListItemButton} from "@mui/material";
import {Link} from "react-router-dom";

export default function Menu(props) {

    return (
        <Drawer
            anchor='left'
            open={props.open}
            onClose={props.close}
        >
            <Box
                sx={{width: 250}}
                role="presentation"
                onClick={props.close}
            >
                <List>
                    <ListItem key={0} disablePadding>
                        <ListItemButton>
                            <Link to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                Главная
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={1} disablePadding>
                        <ListItemButton>
                            <Link to="/news" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                Новости
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={2} disablePadding>
                        <ListItemButton>
                            <Link to="/services" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                Услуги
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={3} disablePadding>
                        <ListItemButton>
                            <Link to="/about" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                О нас
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={4} disablePadding>
                        <ListItemButton>
                            <Link to="/contacts" style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                Контакты
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}