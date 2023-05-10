import React, {useEffect, useState} from "react";
import {Box, Divider, Paper, Stack, styled, Typography} from "@mui/material";
import {api} from "../../../authorisation/auth";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '20px',
    textAlign: 'left',
}));

export default function NewsList (props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await api.get('/posts');
            setPosts(response.data);
        };

        fetchProducts();

    }, []);

    useEffect(()=>{console.log(posts)},[posts])
    if(posts.length===0){
        return (
            <Typography>Loading</Typography>
        )
    }
    return(
        <Box sx={{width:props.width,marginTop: '10px',marginBottom: '10px'}}>
            <Stack
                direction='column'
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}>
                {posts.map((post)=>{
                    return (
                        <Item>
                            <Typography variant='h4'>{post.title}</Typography>
                            <img src={`http://localhost:5000/${post.image}`} alt="File" style={{width:'500px'}}/>
                            <Typography>{post.content}</Typography>
                        </Item>
                    )
                })}
            </Stack>
        </Box>
    )
}