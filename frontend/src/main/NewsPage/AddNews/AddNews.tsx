import React from "react";
import {Box, Button, TextField} from "@mui/material";
import jwt_decode from "jwt-decode";
import {apiAddNews} from "../../../api/addNews/apiAddNews";

interface DecodedToken {
    name: string;
    surname:string;
    email: string;
    id: number;
    roles: [];
    iat: number;
    exp: number;
}

export default function AddNews(props) {
    const [title, setTitle] = React.useState('');
    const [news, setNews] = React.useState('');
    const [image, setImage] = React.useState(null);

    const clear=()=>{
        setTitle('')
        setNews('')
        setImage(null)
    }
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
            await apiAddNews(formData);
            props.setReload()
            clear()
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
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <TextField
                    id="content-news"
                    label="Новость"
                    multiline
                    rows={4}
                    variant="standard"
                    required
                    value={news}
                    onChange={(e)=>setNews(e.target.value)}
                />
                <input
                    accept=".jpg"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    onChange={handleFileChange}
                    required
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