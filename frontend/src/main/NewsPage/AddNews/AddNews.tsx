import React from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {api} from "../../../authorisation/auth";
import jwt_decode from "jwt-decode";

interface DecodedToken {
    name: string;
    surname:string;
    email: string;
    id: number;
    roles: [];
    iat: number;
    exp: number;
}

export default function AddNews() {
    const [title, setTitle] = React.useState('');
    const [news, setNews] = React.useState('');
    const [image, setImage] = React.useState(null);

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    }
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            const token = localStorage.getItem('token')
            const decodedToken:DecodedToken = jwt_decode(token);
            const id = decodedToken.id
            formData.append('title',title)
            formData.append('content',news)
            formData.append('userId',id.toString())
            formData.append('image',image)
            await api.post('posts', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });


        } catch (e) {
            console.log(e.request.response)
        }
    }

    return(
        <Box sx={{border:'1px solid black',borderRadius:'9px',padding:'10px'}}>
            <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
                <TextField
                    id="title-news"
                    variant="standard"
                    label='Заголовок'
                    required
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <TextField
                    id="content-news"
                    label="Новость"
                    multiline
                    rows={4}
                    variant="standard"
                    required
                    onChange={(e)=>setNews(e.target.value)}
                />
                <input
                    accept=".jpg"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="outlined" component="span" sx={{mt:'5px',mb:'5px',width:'100%'}}>
                        Загрузить изображение
                    </Button>
                </label>
                <Button type='submit'>Добавить</Button>
            </form>
        </Box>
    )
}