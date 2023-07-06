import jwt_decode from "jwt-decode";
import {api} from "../api";

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

interface userProfileData{
    data:{
        gender: string;
        birthday: string;
        phoneNumber:string;
        address: string;
        passport: string;
        SNILS: string;
        userId:number
    }
}


export async function apiGetUserData(){
    const token = localStorage.getItem('token')
    const user:DecodedToken = jwt_decode(token);
    const {name,surname,email,id} = user
    const userProfileData:userProfileData = await api.get('/personal-data/'+id)
    return {
        name,
        surname,
        email,
        gender: userProfileData.data.gender,
        birthday: userProfileData.data.birthday,
        phoneNumber: userProfileData.data.phoneNumber,
        address: userProfileData.data.address,
        passport: userProfileData.data.passport,
        SNILS: userProfileData.data.SNILS,
        userId:id
    }
}