import React, {useEffect, useState} from "react";
import {Box, Button, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import {apiGetUserData} from "../../../api/userData/apiGetUserData";
import * as _ from 'lodash';
import {apiSaveUserData} from "../../../api/userData/apiSaveUserData";
import {isAdmin} from "../../../api/authorisation/role/isAdmin";

interface MainProfileData {
    name: string;
    surname: string;
    email: string;
}
interface ProfileData {
    gender: string;
    birthday: string;
    phoneNumber: string;
    address: string;
    passport: string;
    SNILS: string;
    userId:number;
}
export default function PersonalData() {
    const [mainProfileData, setMainProfileData] = useState<MainProfileData>({
        name: '',
        surname: '',
        email: '',
    })
    const [profileData, setProfileData] = useState<ProfileData>({
        gender: '',
        birthday: '',
        phoneNumber: '',
        address: '',
        passport: '',
        SNILS: '',
        userId: null
    })
    const [open,setOpen] = useState(false)
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)')
    const [width,setWidth] = useState(!isTabletOrMobile ? '60%' : '100%')
    React.useEffect(() => {
        if (!isTabletOrMobile){
            setWidth('60%')
        }
        else{
            setWidth('100%')
        }
    }, [isTabletOrMobile])

    useEffect(() => {
        const getData = async () => {
            let data = await apiGetUserData()
            setMainProfileData(_.pick(data,['name', 'surname', 'email']))
            setProfileData(_.pick(data,['gender', 'birthday', 'phoneNumber', 'address','passport','SNILS','userId']))
        }
        getData()
    }, [])

    const handleChange = (event,field) => {
        let tempData = {...profileData}
        tempData[field] = event.target.value
        setProfileData(tempData)
        setOpen(true)
    }

    const handleSubmit = async (event)=>{
        try {
            event.preventDefault();
            await apiSaveUserData(profileData);
        } catch (e) {
            console.log(e.request.response)
        }
    }

    return (
        <Box sx={{width: {width}, margin: 'auto'}}>
            <Typography variant='h5' >Персональные данные</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: "1rem"}}>
                <TextField id="name" label="Имя" variant="standard" value={mainProfileData.name} disabled/>
                <TextField id="surname" label="Фамилия" variant="standard" value={mainProfileData.surname} disabled/>
                <TextField id="email" label="Почта" variant="standard" value={mainProfileData.email} disabled/>
                <form style={{display: 'flex', flexDirection: 'column', gap: "1rem"}} onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                        <InputLabel id="genderL">Пол</InputLabel>
                        <Select
                            labelId="genderL"
                            id="gender"
                            value={profileData.gender}
                            label="Пол"
                            onChange={(event)=>handleChange(event,'gender')}
                            sx={{}}
                        >
                            <MenuItem value='male'>Мужской</MenuItem>
                            <MenuItem value='female'>Женский</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="birthday"
                        label="День рождения"
                        type="date"
                        value={profileData.birthday}
                        onChange={(event)=>handleChange(event,'birthday')}
                        sx={{minWidth: "120px"}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="phoneNumber"
                               label="Телефон"
                               variant="standard"
                               value={profileData.phoneNumber}
                               type='tel'
                               onChange={(event)=>handleChange(event,'phoneNumber')}/>
                    <TextField id="address"
                               label="Адрес"
                               variant="standard"
                               value={profileData.address}
                               onChange={(event)=>handleChange(event,'address')}/>
                    <TextField id="passport"
                               label="Паспорт"
                               variant="standard"
                               type='number'
                               value={profileData.passport}
                               onChange={(event)=>handleChange(event,'passport')}/>
                    <TextField id="SNILS"
                               label="СНИЛС"
                               variant="standard"
                               type='number'
                               value={profileData.SNILS}
                               onChange={(event)=>handleChange(event,'SNILS')}/>
                    {open && <Button type='submit' variant='contained'>Сохранить</Button>}
                </form>

            </Box>
        </Box>
    )
}