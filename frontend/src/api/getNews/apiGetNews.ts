import {api} from "../api";


export async function apiGetNews(){
    const response = await api.get('/posts');
    return response.data
}