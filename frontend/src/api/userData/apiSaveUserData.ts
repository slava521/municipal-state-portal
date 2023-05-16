import {api} from "../api";

export async function apiSaveUserData(profileData){
    try {
        const data = await api.put('/personal-data',profileData)
        console.log(data)
    }
    catch (e) {
        console.log(e.request.response)
    }
}