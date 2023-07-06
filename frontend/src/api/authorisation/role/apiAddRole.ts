import {api} from "../../api";


export default async function apiAddRole (userRole) {
    const data = await api.post('/users/role',userRole)
}