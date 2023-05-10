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
    return (
        <Box>
            <Typography variant="h4" component='h2'>Контакты</Typography>
            <Box sx={{
                width: 'calc(100% - 40px)',
                backgroundColor: 'secondary.main',
                minHeight: '200px',
                boxShadow: '0 0 6px secondary.main',
                padding: '20px',
                marginTop: '20px'
            }}>
                <Typography sx={styleParagraph} component='p'>Электронная почта: <Link
                    href="mailto:help@cheb.ru" sx={{color: 'inherit', display: 'flex', alignItems: 'center', ml: '4px'}}
                    target='_blank'><MailIcon/>help@cheb.ru</Link></Typography>
                <Typography sx={styleParagraph} component='p'>Телефон: <Link href="tel:89520239115" sx={{
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    ml: '4px'
                }} target='_blank'><Call/>+7 (952) 023-91-15</Link></Typography>
                <Typography sx={styleParagraph} component='p'>Telegram: <Link
                    href="https://t.me/+79520239115"
                    sx={{color: 'inherit', display: 'flex', alignItems: 'center', ml: '4px'}}
                    target='_blank'><Telegram/>t.me/+79520239115</Link></Typography>
                <Typography sx={styleParagraph} component='p'>Адрес: <Link
                    href="https://yandex.ru/maps/-/CCUkYBWH0D"
                    sx={{color: 'inherit', display: 'flex', alignItems: 'center', ml: '4px'}} target='_blank'><Home/>г.Москва,
                    ул.1-я Синичкина, д.3, к.1А</Link></Typography>
                <Typography sx={styleParagraph} component='p'>График работы: среда - четверг с 12:00
                    до 13:00.</Typography>
                <Typography sx={styleParagraph} style={{marginBottom: '10px'}} component='p'>Если у вас
                    есть вопросы или предложения по улучшению работы портала, пожалуйста, свяжитесь с нами любым удобным
                    для вас способом. Мы всегда готовы ответить на ваши вопросы и помочь вам получить необходимую
                    информацию.</Typography>
            </Box>
        </Box>
    );
}