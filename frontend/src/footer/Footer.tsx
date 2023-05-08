import React, {Component} from "react";
import {Box, Container, Link, Typography} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import {Call, Copyright, Telegram} from "@mui/icons-material";

interface Props {
}

export default class Footer extends Component<Props, any> {
    render() {
        return (
            <Box sx={{backgroundColor:'primary.main',color:'primary.contrastText'}}>
                <Container sx={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'20px',paddingBottom:'20px'}}>
                    <Typography sx={{display:'flex',alignItems:'center'}}><Copyright/>2023 cheb.ru. Все права защищены</Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Link href="mailto:help@cheb.ru" sx={{color:'inherit',display:'flex',alignItems:'center',marginRight:'20px'}} target='_blank'><MailIcon/></Link>
                        <Link href="tel:89520239115" sx={{color:'inherit',display:'flex',alignItems:'center',marginRight:'20px'}} target='_blank'><Call/></Link>
                        <Link href="https://t.me/+79520239115" sx={{color:'inherit',display:'flex',alignItems:'center',marginRight:'20px'}} target='_blank'><Telegram/></Link>
                    </Box>
                </Container>
            </Box>
        )
    }
}