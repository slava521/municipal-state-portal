import RenderPage from "../../render";
import {root} from "../../index";
import {api} from "../api";

interface dataLogin{
    email:string;
    password:string;
}
export async function apiLogin(dataLogin:dataLogin){
    const response = await api.post('auth/login', dataLogin);
    return response.data.token
}

interface dataRegistration{
    name:string;
    surname:string;
    email:string;
    password:string;
}

export async function apiRegistration(dataRegistration:dataRegistration){
    const response = await api.post('auth/registration', dataRegistration);
    return response.data.token
}

export async function apiSignOut(){
    localStorage.removeItem("token")
    setAuthToken(null)
}

export function setAuthToken(token) {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
    RenderPage(root)
}