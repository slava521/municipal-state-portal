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
import { useNavigate } from "react-router-dom";
import {apiLogin, setAuthToken} from "../../api/authorisation/auth";
import {isAuthenticated} from "../../api/authorisation/isAuthenticated";

export default function LoginPage(){
    const [showPassword, setShowPassword] = React.useState(false);
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
            const token = await apiLogin({email, password});
            localStorage.setItem('token', token);
            setAuthToken(token)
            if (isAuthenticated()) {
                navigate("/");
            }

        }catch (e){
            console.log(e.request.response)
            setOpen(true)
        }
    };

    return(
        <Box sx={{width:'250px',margin:'auto',marginTop:'30px'}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <TextField sx={{ m: 1, width: '230px' }} id="email" label="Почта" type={'email'} variant="standard" onChange={(event)=>setEmail(event.target.value)} required/>
                    <FormControl sx={{ m: 1, width: '230px' }} variant="standard">
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
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={(event)=>setPassword(event.target.value)}
                            required
                        />
                    </FormControl>
                    <Button variant="outlined" type='submit'>Войти</Button>
                </Box>
            </form>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Неправильная почта или пароль
                </Alert>
            </Snackbar>
        </Box>
    )
}