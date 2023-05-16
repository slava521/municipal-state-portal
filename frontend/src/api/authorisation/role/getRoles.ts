import jwt_decode from "jwt-decode";

interface DecodedToken {
    name: string;
    surname:string;
    email: string;
    id: number;
    roles: [{
        id: number,
        value:string,
        description:string,
        createdAt:string,
        updatedAt:string,
        UserRoles:Object
    }];
    iat: number;
    exp: number;
}
export function getRoles(){
    const token = localStorage.getItem('token')
    const decodedToken:DecodedToken = jwt_decode(token);
    return decodedToken.roles
}