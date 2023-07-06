import {api} from "../api";

export async function deleteApplication(id){
    const data = await api.delete('/applications/'+id)
}