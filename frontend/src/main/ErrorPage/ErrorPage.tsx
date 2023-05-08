import React from "react";
import {Box, Typography} from "@mui/material";

export default function ErrorPage(){
    return(
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h2">
                Ошибка 404
            </Typography>
            <Typography variant="h4">
                Страница не найдена
            </Typography>
        </Box>
    )
}