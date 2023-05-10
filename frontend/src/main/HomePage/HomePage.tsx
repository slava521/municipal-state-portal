import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import CSS, { Property }  from 'csstype'
import {Link} from "react-router-dom";


interface style {
    box: CSS.Properties;
    boxes: CSS.Properties;

}

export default function HomePage() {

    const isTabletOrMobile = useMediaQuery('(max-width: 768px)')

    const [boxWidth, setBoxWidth] = React.useState(!isTabletOrMobile ? 'calc(33% - 30px)':'calc(100% - 20px)');
    const [flexDirection, setFlexDirection] = React.useState<Property.FlexDirection>(!isTabletOrMobile ? 'row':'column');

    React.useEffect(() => {
        if (isTabletOrMobile){
            setBoxWidth('calc(100% - 20px)')
            setFlexDirection('column')
        }
        else {
            setBoxWidth('calc(33% - 30px)')
            setFlexDirection('row')
        }
    }, [isTabletOrMobile])

    const style: style = {
        box: {
            width: boxWidth,
            backgroundColor: 'secondary.main',
            minHeight: '200px',
            boxShadow: '0 0 6px secondary.main',
            padding: '10px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
        },
        boxes: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: flexDirection,
            marginBottom: '20px'
        }
    }

    return (
        <Box sx={{textAlign:'center'}}>
            <Typography sx={{marginTop: '30px',}} variant="h4" component='h1'>Муниципальный государственный портал города Чебоксары</Typography>
            <Box sx={style.boxes}>
                <Box sx={style.box}>
                    <Typography variant="h6" component='h2'>Новости</Typography>
                    <Link to="/news" style={{'color': 'inherit'}}>
                        Подробнее
                    </Link>
                </Box>
                <Box sx={style.box}>
                    <Typography variant="h6" component='h2'>Услуги</Typography>
                    <Link to="/services" style={{'color': 'inherit'}}>
                        Другие
                    </Link>
                </Box>
                <Box sx={style.box}>
                    <Box>
                        <Typography variant="h6" component='h2'>О нас</Typography>
                        <Typography>Муниципальный государственный портал города Чебоксары является официальным источником информации о жизни и деятельности города. На портале можно получить доступ к новостям, услугам и загрузить необходимые документы.</Typography>
                    </Box>
                    <Link to="/about" style={{'color': 'inherit'}}>
                        Узнать больше
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}