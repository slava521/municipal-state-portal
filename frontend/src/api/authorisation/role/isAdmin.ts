import {isAuthenticated} from "../isAuthenticated";
import {getRoles} from "./getRoles";

export function isAdmin() {
    if (isAuthenticated()) {
        const roles = getRoles()
        let flag = false
        for (let role of roles) {
            flag = role.value === 'ADMIN'
            if (flag){
                return true
            }
        }
    }
    return false
}