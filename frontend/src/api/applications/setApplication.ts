import {api} from "../api";
import jwt_decode from "jwt-decode";

interface DecodedToken {
    name: string;
    surname:string;
    email: string;
    id: number;
    roles: [Object];
    iat: number;
    exp: number;
}

export async function setApplication(title,description) {
    try {
        const token = localStorage.getItem('token')
        const user:DecodedToken = jwt_decode(token);
        const application = await api.post('/applications',{userId:user.id,ready:false,title,description,status:'ожидание'})

    }
    catch (e) {
        console.log(e.request.response)
    }
}