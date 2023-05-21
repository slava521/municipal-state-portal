import React, {useEffect, useState} from "react";
import {Box, Paper, styled, Typography} from "@mui/material";
import {apiGetLastNews} from "../../../api/getNews/apiGetNews";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '25px',
    textAlign: 'center',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
}));
export default function LastNews(){
    const [post, setPost] = useState([]);
    const [nullOrLoading,setNullOrLoading] = useState('Loading')

    useEffect(()=>{
        const fetchProducts = async () => {
            const news = await apiGetLastNews()
            setPost([news]);
        };
        fetchProducts();
        if(post.length===0){
            setNullOrLoading('Новостей пока нет')
        }
    },[])

    if(post.length===0){
        return (
            <Typography variant='h5' sx={{mt:'10px'}}>{nullOrLoading}</Typography>
        )
    }


    return(
        <Box>
            <Item>
                <Typography variant='h6'>{post[0].title}</Typography>
                <Typography>{post[0].content}</Typography>
            </Item>
        </Box>
    )
}