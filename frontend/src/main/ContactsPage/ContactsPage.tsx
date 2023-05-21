import React from "react";
import {Box, Link, Typography} from "@mui/material";
import CSS from "csstype";
import MailIcon from "@mui/icons-material/Mail";
import {Call, Home, Telegram} from "@mui/icons-material";


export default function ContactsPage() {
    const styleParagraph: CSS.Properties = {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center'
    }
    const styleIcons: CSS.Properties = {
        marginRight: '3px'
    }
    const leftColumn: CSS.Properties = {
        minWidth: '170px'
    }
    const link: CSS.Properties = {
        color: '#2879c0',
        fontWeight: 600,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
    }

    return (
        <Box>
            <Typography variant="h4" component='h2'>Контакты</Typography>
            <Box sx={{
                width: 'calc(100% - 40px)',
                minHeight: '200px',
                boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
                borderRadius: '16px',
                padding: '32px',
                marginTop: '20px'
            }}>
                <Typography sx={styleParagraph}>
                    <span style={leftColumn}>Электронная почта:</span>
                    <Link
                        href="mailto:semenovslava293@gmail.com"
                        sx={link}
                        target='_blank'>
                        <MailIcon sx={styleIcons}/>semenovslava293@gmail.com</Link>
                </Typography>
                <Typography sx={styleParagraph}>
                    <span style={leftColumn}>Телефон:</span>
                    <Link href="tel:89520239115" sx={link} target='_blank'><Call sx={styleIcons}/>+7 (952)
                        023-91-15</Link>
                </Typography>
                <Typography sx={styleParagraph}>
                    <span style={leftColumn}>Telegram:</span>
                    <Link
                        href="https://t.me/+79520239115"
                        sx={link}
                        target='_blank'><Telegram sx={styleIcons}/>t.me/+79520239115</Link>
                </Typography>
                <Typography sx={styleParagraph}>
                    <span style={leftColumn}>Адрес:</span>
                    <Link
                        href="https://yandex.ru/maps/-/CCUkYBWH0D" sx={link} target='_blank'><Home sx={styleIcons}/>г.Москва,
                        ул.1-я Синичкина, д.3, к.1А</Link>
                </Typography>
                <Typography sx={styleParagraph}>
                    <span style={leftColumn}>График работы:</span>
                    среда - четверг с 12:00 до 13:00.
                </Typography>
                <Typography sx={styleParagraph} style={{marginBottom: '10px'}}>Если у вас
                    есть вопросы или предложения по улучшению работы портала, пожалуйста, свяжитесь с нами любым удобным
                    для вас способом. Мы всегда готовы ответить на ваши вопросы и помочь вам получить необходимую
                    информацию.</Typography>
            </Box>
        </Box>
    );
}