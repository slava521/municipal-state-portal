import React from "react";
import {Paper, Stack, styled, Typography} from "@mui/material";
import CSS from "csstype";
import services from "../../servicesConstant/services";
import {Link} from "react-router-dom";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '25px',
    textAlign: 'left',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
    color: '#2879c0',
}));

export default function LastServices() {
    const link: CSS.Properties = {
        textDecoration: 'none',
    }
    return (
        <Stack spacing={2}>
            <Link to={`/services/0`} key={0} style={link}>
                <Item key={0}>
                    <Typography sx={{fontWeight:600}}>{services[0]}</Typography>
                </Item>
            </Link>
            <Link to={`/services/1`} key={1} style={link}>
                <Item key={1}>
                    <Typography sx={{fontWeight:600}}>{services[1]}</Typography>
                </Item>
            </Link>
        </Stack>
    )
}
