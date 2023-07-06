import React, {useEffect, useState} from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import AddNews from "./AddNews/AddNews";
import NewsList from "./NewsList/NewsList";
import {Property} from "csstype";
import {isAdmin} from "../../api/authorisation/role/isAdmin";


export default function NewsPage() {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)')
    const [addWidth, setAddWidth] = React.useState(!isTabletOrMobile ? '265px' : 'calc(100% - 20px)');
    const [listWidth, setListWidth] = React.useState(!isTabletOrMobile ? 'calc(100% - 285px)' : 'calc(100% - 20px)');
    const [flexDirection, setFlexDirection] = React.useState<Property.FlexDirection>(!isTabletOrMobile ? 'row':'column');
    const [reload,setReload] = React.useState(0)

    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const fetchCivilServantStatus = async () => {
            const result = await isAdmin();
            setAdmin(result)
        };
        fetchCivilServantStatus();
    }, [])

    const displayForm = admin?'block':'none'
    React.useEffect(() => {
        if (admin){
            if (isTabletOrMobile){
                setAddWidth('calc(100% - 20px)')
                setListWidth('calc(100% - 20px)')
                setFlexDirection('column')
            }
            else {
                setAddWidth('265px')
                setListWidth('calc(100% - 285px)')
                setFlexDirection('row')
            }
        }
        else{
            setAddWidth('calc(100% - 20px)')
            setListWidth('calc(100% - 20px)')
            setFlexDirection('column')
        }
    }, [isTabletOrMobile,admin])

    const reloadList = ()=>{
        setReload(reload+1)
    }

    return (
        <Box>
            <Typography variant="h4" component='h2'>Новости</Typography>
            <Box sx={{
                width: 'calc(100% - 40px)',
                minHeight: '200px',
                boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
                borderRadius: '16px',
                padding: '32px',
                marginTop: '20px',
                display: 'flex',
                flexDirection:flexDirection,
            }}>
                <Box sx={{width:addWidth,marginRight:'20px',marginTop: '10px',display:displayForm}}>
                    <Typography variant='h5' sx={{marginBottom:'10px'}}>Добавить новость</Typography>
                    <AddNews setReload={reloadList}/>
                </Box>
                <NewsList width={listWidth} reload={reload}/>
            </Box>
        </Box>
    );
}