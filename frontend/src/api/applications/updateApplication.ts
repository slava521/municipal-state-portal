import {api} from "../api";


export async function updateApplication(application,id){
    const data = await api.put('/applications/'+id,application)
}