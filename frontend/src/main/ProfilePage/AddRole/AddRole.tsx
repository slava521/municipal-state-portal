import React, {useState} from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import apiAddRole from "../../../api/authorisation/role/apiAddRole";

export default function AddRole() {
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('CIVIL SERVANT')

    const handleSubmit = async (event) => {
        event.preventDefault()
        await apiAddRole({value:role,email})
        setEmail('')
        setRole('CIVIL SERVANT')
    }

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };
    return (
        <Box sx={{
            width: 'calc(100% - 40px)',
            minHeight: '200px',
            boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
            borderRadius: '16px',
            padding: '32px',
            marginTop: '20px',
            marginBottom: '30px'
        }}>
            <Typography variant='h5'>Назначить роль пользователю</Typography>
            <form onSubmit={handleSubmit} style={{
                width: '100%',
                display: "flex",
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <TextField type='email'
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}
                           value={email}
                           fullWidth
                           label='Email'
                           required/>
                <FormControl>
                    <InputLabel id="roleLabel">Роль</InputLabel>
                    <Select
                        labelId="roleLabel"
                        id="roleField"
                        value={role}
                        label="Роль"
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value='CIVIL SERVANT'>Госслужащий</MenuItem>
                        <MenuItem value='ADMIN'>Админ</MenuItem>
                    </Select>
                </FormControl>
                <Button fullWidth type='submit' variant='contained'>Добавить</Button>
            </form>
        </Box>
    )
}