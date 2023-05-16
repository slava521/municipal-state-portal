import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import CSS, { Property }  from 'csstype'
import {Link} from "react-router-dom";


interface style {
    box: CSS.Properties;
    boxes: CSS.Properties;
    link: CSS.Properties;
}

export default function HomePage() {

    const isTabletOrMobile = useMediaQuery('(max-width: 768px)')

    const [flexDirection, setFlexDirection] = React.useState<Property.FlexDirection>(!isTabletOrMobile ? 'row':'column');

    React.useEffect(() => {
        if (isTabletOrMobile){
            setFlexDirection('column')
        }
        else {
            setFlexDirection('row')
        }
    }, [isTabletOrMobile])

    const style: style = {
        box: {
            minHeight: '200px',
            boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
            borderRadius:'16px',
            padding: '24px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            flexBasis:'100%',
        },
        boxes: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: flexDirection,
            marginBottom: '20px',
            gap:'24px',
        },
        link:{
            color:'#2879c0',
            fontWeight:600,
            textDecoration:'none',
            marginTop:'16px'
        }
    }

    return (
        <Box sx={{textAlign:'center'}}>
            <Typography sx={{marginTop: '30px',}} variant="h4" component='h1'>Муниципальный государственный портал города Чебоксары</Typography>
            <Box sx={style.boxes}>
                <Box sx={style.box}>
                    <Typography variant="h6" component='h2'>Новости</Typography>
                    <Link to="/news" style={style.link}>
                        Подробнее
                    </Link>
                </Box>
                <Box sx={style.box}>
                    <Typography variant="h6" component='h2'>Услуги</Typography>
                    <Link to="/services" style={style.link}>
                        Другие
                    </Link>
                </Box>
                <Box sx={style.box}>
                    <Box>
                        <Typography variant="h6" component='h2'>О нас</Typography>
                        <Typography>Муниципальный государственный портал города Чебоксары является официальным источником информации о жизни и деятельности города. На портале можно получить доступ к новостям, услугам и загрузить необходимые документы.</Typography>
                    </Box>
                    <Link to="/about" style={style.link}>
                        Узнать больше
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}