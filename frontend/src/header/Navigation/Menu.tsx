import React from "react";
import {Box, Drawer, List, ListItem, ListItemButton} from "@mui/material";
import {Link} from "react-router-dom";
import urls from "./Urls";

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
                    {
                        urls.map((el,key)=>{
                            return (
                                <ListItem key={key} disablePadding>
                                    <ListItemButton>
                                        <Link to={el.path} style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                            {el.description}
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </Drawer>
    )
}