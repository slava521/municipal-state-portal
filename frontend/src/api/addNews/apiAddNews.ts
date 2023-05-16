import {api} from "../api";

export async function apiAddNews(formData:FormData){
    await api.post('posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}