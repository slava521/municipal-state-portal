import React from "react";
import {Paper, Stack, styled, Typography} from "@mui/material";
import services from "../../servicesConstant/services";
import {Link} from "react-router-dom";
import CSS from "csstype";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '25px',
    textAlign: 'left',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
    color: '#2879c0',
}));

export default function ServicesList() {
    const link: CSS.Properties = {
        textDecoration: 'none',
    }
    return (
        <Stack spacing={2}>
            {services.map((el, key) => {
                return (
                    <Link to={`/services/${key}`} key={key} style={link}>
                        <Item key={key}>
                            <Typography variant='h6'>{el}</Typography>
                        </Item>
                    </Link>
                )
            })}
        </Stack>
    )
}