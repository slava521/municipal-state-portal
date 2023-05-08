import React from "react";
import {Box} from "@mui/material";
import {isAuthenticated} from "../../authorisation/isAuthenticated";
import {Navigate} from "react-router-dom";

export default function ProfilePage(){

    if (!isAuthenticated()){
        return <Navigate to='/login'/>
    }

    return(
        <Box>
            Страница пользователя
        </Box>
    )
}