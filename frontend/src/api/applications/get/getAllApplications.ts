import {api} from "../../api";


export async function getAllApplications(){
    const result = await api.get('/applications')
    return result.data
}
