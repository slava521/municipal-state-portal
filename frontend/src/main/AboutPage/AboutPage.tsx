import React from "react";
import {Box, Typography} from "@mui/material";
import CSS  from 'csstype'


export default function AboutPage() {
    const styleParagraph:CSS.Properties={
        marginTop:'10px'
    }

    return (
        <Box>
            <Typography variant="h4" component='h2'>О нас</Typography>
            <Box sx={{
                width: 'calc(100% - 40px)',
                minHeight: '200px',
                boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
                borderRadius:'16px',
                padding: '32px',
                marginTop: '20px'
            }}>
                <Typography sx={styleParagraph} variant="h6">Добро пожаловать на муниципальный государственный портал города Чебоксары!</Typography>
                <Typography sx={styleParagraph}>Наш портал является официальным источником информации о жизни и деятельности города
                    Чебоксары. На нашем сайте вы найдете множество полезной информации о городе, его истории,
                    достопримечательностях и событиях, которые происходят в городе.</Typography>
                <Typography sx={styleParagraph}>Миссия нашего портала - создать удобное и доступное пространство для взаимодействия граждан,
                    бизнеса и органов власти, а также содействовать развитию экономики и социальной сферы
                    города.</Typography>
                <Typography sx={styleParagraph}>Наш портал был создан в 2023 году и с тех пор активно развивается, чтобы лучше отвечать
                    потребностям горожан. Мы регулярно обновляем содержание сайта и предлагаем новые услуги, которые
                    помогают гражданам получать необходимые сведения и делать свою жизнь более комфортной и
                    удобной.</Typography>
                <Typography sx={styleParagraph}>Наша команда состоит из опытных профессионалов в области информационных технологий и
                    государственного управления, которые работают над тем, чтобы портал был максимально полезным и
                    удобным для всех пользователей.</Typography>
                <Typography sx={styleParagraph}>На нашем портале вы можете не только получить доступ к новостям и услугам, но и загрузить
                    необходимые документы, чтобы ускорить процесс обращения в государственные органы. Мы также
                    предлагаем широкий спектр услуг, которые помогают гражданам решать различные проблемы, связанные с
                    жизнью в городе.</Typography>
                <Typography sx={styleParagraph} style={{marginBottom: '10px'}} >Мы надеемся, что наш портал будет для вас полезным и интересным и поможет вам быстро и легко
                    получить необходимую информацию о городе и его жизни.</Typography>
            </Box>
        </Box>
    );
}