import React from "react";
import {api, setAuthToken} from "../../authorisation/auth";
import {Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {isAuthenticated} from "../../authorisation/isAuthenticated";
import {Navigate} from 'react-router-dom';

export default function RegistrationPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirectToHome, setRedirectToHome] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    if (redirectToHome) {
        return <Navigate to="/" />;
    }


    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await api.post('auth/registration', {name,surname,email, password});
            localStorage.setItem('token', response.data.token);
            setAuthToken(response.data.token)
            if (isAuthenticated()){
                setRedirectToHome(true);
            }

        }catch (e){
            console.log(e.request.response)
        }
    };

    return (
        <Box sx={{width: '250px', margin: 'auto', marginTop: '30px'}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField sx={{m: 1, width: '230px'}} id="name" label="Имя" variant="standard"
                               onChange={(event) => setName(event.target.value)} required/>
                    <TextField sx={{m: 1, width: '230px'}} id="surname" label="Фамилия" variant="standard"
                               onChange={(event) => setSurname(event.target.value)} required/>
                    <TextField sx={{m: 1, width: '230px'}} id="email" label="Почта" variant="standard"
                               onChange={(event) => setEmail(event.target.value)} type={'email'} required/>
                    <FormControl sx={{m: 1, width: '230px'}} variant="standard">
                        <InputLabel htmlFor="password">Пароль</InputLabel>
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </FormControl>
                    <Button variant="outlined" type='submit'>Войти</Button>
                </Box>
            </form>
        </Box>
    )
}