import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../../api/authorisation/isAuthenticated";
import {getUserApplications} from "../../../api/applications/get/getUserApplications";
import {Box, Button, ButtonGroup, Paper, Stack, styled, TextField, Typography} from "@mui/material";
import {deleteApplication} from "../../../api/applications/deleteApplication";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '25px',
    textAlign: 'left',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
    display:'flex',
    flexDirection:'column',
    gap:'1rem'
}));
export default function UserApplicationsList() {
    const [applications,setApplications] = useState([])
    const [nullOrLoading,setNullOrLoading] = useState('Loading')
    const [reload,setReload] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuthenticated()){
            navigate('/login')
        }
    },[])

    useEffect(()=>{
        const getApplication = async ()=>{
            const data = await getUserApplications()
            setApplications(data)
        }
        getApplication()
        if(applications.length===0){
            setNullOrLoading('Обработанных заявок пока нет')
        }
    },[reload])

    if(applications.length===0){
        return <Typography>{nullOrLoading}</Typography>
    }

    const handleDelete = async (id)=>{
        await deleteApplication(id)
        setReload(reload+1)
    }

    return(
        <Box>
            <Stack spacing={2}>
                {applications.map((el) => {
                    return (
                        <Item key={el.id}>
                            <Typography variant='h6'>{el.title}</Typography>
                            <Typography>{el.description}</Typography>
                            <Typography variant='h6'>Статус: {el.status}</Typography>
                            <Button variant='contained' fullWidth onClick={()=>handleDelete(el.id)}>Принято</Button>
                        </Item>
                    )
                })}
            </Stack>
        </Box>
    )
}