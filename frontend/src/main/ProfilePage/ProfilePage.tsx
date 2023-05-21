import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {isAuthenticated} from "../../api/authorisation/isAuthenticated";
import {useNavigate} from "react-router-dom";
import PersonalData from "./PersonalData/PersonalData";
import AddRole from "./AddRole/AddRole";
import {isAdmin} from "../../api/authorisation/role/isAdmin";

export default function ProfilePage(){
    const [admin, setAdmin] = useState(false)

    const navigate = useNavigate();
    useEffect(()=>{
        if (!isAuthenticated()){
            navigate('/login')
        }
    })
    useEffect(() => {
        const fetchAdminStatus = async () => {
            const result = await isAdmin();
            setAdmin(result)
        };
        fetchAdminStatus();
    }, [])

    return(
        <Box>
            <Typography variant="h4" component='h2'>Страница пользователя</Typography>
            {admin && <AddRole/>}
            <Box sx={{
                width: 'calc(100% - 40px)',
                minHeight: '200px',
                boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
                borderRadius:'16px',
                padding: '32px',
                marginTop: '20px',
            }}>

                <PersonalData/>
            </Box>
        </Box>
    )
}