import {api} from "../../api";


export async function getUserApplications(){
    const result = await api.get('/applications/user',{
        headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
    })
    return result.data
}
