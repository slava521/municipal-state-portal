import React from "react";
import {Container} from "@mui/material";
import HomePage from "./HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import ServicesPage from "./ServicesPage/ServicesPage";
import NewsPage from "./NewsPage/NewsPage";
import AboutPage from "./AboutPage/AboutPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import LoginPage from "./LoginPage/LoginPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import {isAuthenticated} from "../api/authorisation/isAuthenticated";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProfilePage from "./ProfilePage/ProfilePage";


export default function Main() {


    return (
        <Container sx={{mt:'20px',mb:'20px'}}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/contacts' element={<ContactsPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                {!isAuthenticated() && <Route path='/login' element={<LoginPage/>}/>}
                {!isAuthenticated() && <Route path='/registration' element={<RegistrationPage/>}/>}
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </Container>
    )
}