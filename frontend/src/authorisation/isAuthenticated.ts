import jwt_decode from 'jwt-decode'

interface DecodedToken {
    email: string;
    id: number;
    roles: [];
    iat: number;
    exp: number;
    // другие свойства токена, если они используются
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