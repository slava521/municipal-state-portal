import React from "react";
import {
    Alert,
    Box,
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Snackbar,
    TextField
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {isAuthenticated} from "../../api/authorisation/isAuthenticated";
import {useNavigate} from 'react-router-dom';
import {apiRegistration, setAuthToken} from "../../api/authorisation/auth";

export default function RegistrationPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };



    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const token = await apiRegistration({name,surname,email, password});
            localStorage.setItem('token', token);
            setAuthToken(token)
            if (isAuthenticated()){
                navigate("/");
            }

        }catch (e){
            console.log(e.request.response)
            setOpen(true)
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
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Такая почта уже есть
                </Alert>
            </Snackbar>
        </Box>
    )
}