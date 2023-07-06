import {api} from "../api";


export async function apiGetNews(){
    const response = await api.get('/posts');
    return response.data
}

export async function apiGetLastNews(){
    const response = await api.get('/posts/last');
    return response.data
}