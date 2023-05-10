import React from "react";
import {Container} from "@mui/material";
import HomePage from "./HomePage/HomePage";
import {Route, Routes, useLocation} from "react-router-dom";
import ServicesPage from "./ServicesPage/ServicesPage";
import NewsPage from "./NewsPage/NewsPage";
import AboutPage from "./AboutPage/AboutPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import LoginPage from "./LoginPage/LoginPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import {isAuthenticated} from "../authorisation/isAuthenticated";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProfilePage from "./ProfilePage/ProfilePage";


export default function Main() {
    const location = useLocation().pathname
    const isAnotherPath = () => {
        let urls = ['/', '/services', '/news', '/about', '/contacts', '/login', '/registration']
        return (!urls.includes(location) || (isAuthenticated() && (location==='/login' || location==='/registration')))
    }

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
                {isAnotherPath() && <Route path={location} element={<ErrorPage/>}/>}
            </Routes>
        </Container>
    )
}