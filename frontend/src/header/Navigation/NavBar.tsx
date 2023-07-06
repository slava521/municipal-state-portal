import React from "react";
import {Button, ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";
import urls from "./Urls";

export default function NavBar(){
    return(
        <ButtonGroup variant="text" aria-label="text button group" color='secondary'>
            {
                urls.map((el,key)=>{
                    return(
                        <Button color="inherit" key={key}>
                            <Link to={el.path} style={{'textDecoration': 'none', 'color': 'inherit'}}>
                                {el.description}
                            </Link>
                        </Button>
                    )
                })
            }
        </ButtonGroup>
    )
}