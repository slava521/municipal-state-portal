import React from "react";
import {Box, Typography} from "@mui/material";
import UserApplicationsList from "./UserApplicationsList/UserApplicationsList";

export default function UserApplicationsPage() {


    return(
        <Box>
            <Typography variant="h4" component='h2'>Обработанные заявки</Typography>
            <UserApplicationsList/>
        </Box>
    )
}