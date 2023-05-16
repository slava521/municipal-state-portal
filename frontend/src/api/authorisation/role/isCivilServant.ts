import {isAuthenticated} from "../isAuthenticated";
import {getRoles} from "./getRoles";

export function isCivilServant() {
    if (isAuthenticated()) {
        const roles = getRoles()
        let flag = false
        for (let role of roles) {
            flag = role.value === 'CIVIL SERVANT'
            if (flag){
                return true
            }
        }
    }
    return false
}