import {isAuthenticated} from "../isAuthenticated";
import {api} from "../../api";

export async function isAdmin() {
    if (isAuthenticated()) {
        const roles = await api.get('roles',{
            headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
        })
        for (let role of roles.data) {
            if (role.value === 'ADMIN') {
                return true;
            }
        }
    }
    return false;
}