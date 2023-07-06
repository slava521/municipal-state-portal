import {isAuthenticated} from "../isAuthenticated";
import {api} from "../../api";

export async function isCivilServant() {
    if (isAuthenticated()) {
        const roles = await api.get('roles',{
            headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
        })
        for (let role of roles.data) {
            if (role.value === 'CIVIL SERVANT') {
                return true;
            }
        }
    }
    return false;
}