import React, {useEffect, useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import ServicesList from "./ServicesList/ServicesList";
import {isCivilServant} from "../../api/authorisation/role/isCivilServant";
import Applications from "./Applications/Applications";


export default function ServicesPage() {
    const [openApplications, setOpenApplications] = useState(false)
    const [civilServant, setCivilServant] = useState(false)
    useEffect(() => {
        const fetchCivilServantStatus = async () => {
            const result = await isCivilServant();
            setCivilServant(result)
        };
        fetchCivilServantStatus();
    }, [])

    const handleClose = ()=>{
        setOpenApplications(false)
    }

    return (
        <Box>
            <Typography variant="h4" component='h2' sx={{mb: '20px'}}>Услуги</Typography>
            {!openApplications && <>
                {civilServant && <Button variant='contained' sx={{width: '100%'}} onClick={()=>{setOpenApplications(true)}}>Обработать заявки</Button>}
                <ServicesList/>
            </>}
            {openApplications && <Applications close={handleClose}/>}

        </Box>
    );
}