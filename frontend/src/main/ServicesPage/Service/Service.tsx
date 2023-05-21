import React, {useEffect, useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {isAuthenticated} from "../../../api/authorisation/isAuthenticated";
import {Link, useNavigate} from "react-router-dom";
import {setApplication} from "../../../api/applications/setApplication";


export default function Service(props) {
    const [description,setDescription] = useState('')

    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login')
        }
    }, [])

    const  handleSubmit = async(event) => {
        event.preventDefault()
        await setApplication(props.service,description)
        navigate('/service')
    }

    return (
        <Box>
            <Typography variant="h4" component='h2'>Услуга</Typography>
            <Box sx={{
                width: 'calc(100% - 40px)',
                minHeight: '200px',
                boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
                borderRadius: '16px',
                padding: '32px',
                marginTop: '20px'
            }}>
                <form style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem'}}
                      onSubmit={handleSubmit}>
                    <TextField label='Заявка' disabled value={props.service}/>
                    <TextField
                        label="Описание заявки"
                        multiline
                        rows={4}
                        required
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />
                    <Button type="submit">Отправить заявку</Button>
                </form>
            </Box>
            <Link to='/services' style={{textDecoration: 'none'}}>
                <Button variant='contained' style={{width: '100%', marginTop: '20px', marginLeft: '10px'}}>Вернуться на
                    страницу услуг</Button>
            </Link>
        </Box>
    )
}