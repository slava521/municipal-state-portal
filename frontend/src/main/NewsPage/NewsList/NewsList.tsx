import React, {useEffect, useState} from "react";
import {Box, Divider, Paper, Stack, styled, Typography} from "@mui/material";
import {apiGetNews} from "../../../api/getNews/apiGetNews";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '25px',
    textAlign: 'left',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
}));

export default function NewsList (props) {
    const [posts, setPosts] = useState([]);
    const [nullOrLoading,setNullOrLoading] = useState('Loading')
    useEffect(() => {
        const fetchPosts = async () => {
            const news = await apiGetNews()
            setPosts(news.reverse());
        };
        fetchPosts();
        if(posts.length===0){
            setNullOrLoading('Новостей пока нет')
        }

    },[props.reload]);

    if(posts.length===0){
        return (
            <Typography variant='h5' sx={{mt:'10px'}}>{nullOrLoading}</Typography>
        )
    }
    return(
        <Box sx={{width:props.width,marginTop: '10px',marginBottom: '10px'}}>
            <Stack
                direction='column'
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}>
                {posts.map((post,key)=>{
                    return (
                        <Item key={key}>
                            <Typography variant='h4'>{post.title}</Typography>
                            <img src={`http://localhost:5000/${post.image}`} alt="File" style={{width:'100%'}}/>
                            <Typography>{post.content}</Typography>
                        </Item>
                    )
                })}
            </Stack>
        </Box>
    )
}