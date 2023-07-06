import React from "react";
import {Box,Typography} from "@mui/material";
import ApplicationsList from "./ApplicationsList/ApplicationsList";

export default function Applications(props) {

    return(
        <Box>
            <Typography variant="h5">Обработка заявок</Typography>
            <ApplicationsList/>
        </Box>
    )
}