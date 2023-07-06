import jwt_decode from 'jwt-decode'

interface DecodedToken {
    name: string;
    surname:string;
    email: string;
    id: number;
    roles: [];
    iat: number;
    exp: number;
}

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    try {
        const decodedToken:DecodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
    } catch (err) {
        console.error(err);
        return false;
    }
}