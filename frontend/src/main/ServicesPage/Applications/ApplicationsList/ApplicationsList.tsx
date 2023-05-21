import React, {useEffect, useState} from "react";
import {getAllApplications} from "../../../../api/applications/get/getAllApplications";
import {Box, Button, ButtonGroup, Paper, Stack, styled, TextField, Typography} from "@mui/material";
import {updateApplication} from "../../../../api/applications/updateApplication";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '25px',
    textAlign: 'left',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
}));
export default function ApplicationsList() {
    const [applications,setApplications] = useState([])
    const [nullOrLoading,setNullOrLoading] = useState('Loading')
    const [reload,setReload] = useState(0)

    useEffect(()=>{
        const getApplication = async ()=>{
            const data = await getAllApplications()
            setApplications(data)
        }
        getApplication()
        if(applications.length===0){
            setNullOrLoading('Обрабатываемых заявок пока нет')
        }
    },[reload])

    if(applications.length===0){
        return <Typography>{nullOrLoading}</Typography>
    }

    const handleSubmit = async (event,id,userId)=>{

        event.preventDefault()
        const title=event.target.elements.title.value
        const description=event.target.elements.description.value
        const buttonName = event.nativeEvent.submitter.name
        const status = event.target.elements[buttonName].value
        const application = {userId,ready:true,title,description,status}
        await updateApplication(application,id)
        setReload(reload+1)
    }


    return (
        <Box>
            <Stack spacing={2}>
                {applications.map((el) => {
                    return (
                        <Item key={el.id}>
                            <form style={{display:'flex',flexDirection:'column',gap:'1rem'}}
                                  onSubmit={(e)=>handleSubmit(e,el.id,el.userId)}>
                                <TextField name='title' value={el.title} label='Заявка' disabled/>
                                <TextField name='previousDescription' value={el.description} label='Описание заявки' multiline disabled/>
                                <TextField name='description' multiline rows={3} label='Ответ'/>
                                <ButtonGroup variant="contained" sx={{width:'100%'}}>
                                    <Button sx={{width:'50%'}} name='accept' value='Одобрено' type='submit'>Одобрить</Button>
                                    <Button sx={{width:'50%'}} name='reject' value='Отклонено' type='submit'>Отклонить</Button>
                                </ButtonGroup>
                            </form>
                        </Item>
                    )
                })}
            </Stack>
        </Box>
    )
}