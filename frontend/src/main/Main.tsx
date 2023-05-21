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
import services from "./servicesConstant/services";
import Service from "./ServicesPage/Service/Service";
import UserApplicationsPage from "./UserApplicationsPage/UserApplicationsPage";


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
                <Route path='/applications' element={<UserApplicationsPage/>}/>
                {!isAuthenticated() && <Route path='/login' element={<LoginPage/>}/>}
                {!isAuthenticated() && <Route path='/registration' element={<RegistrationPage/>}/>}
                {
                    services.map((el,key)=>{
                        return <Route key={key} path={`/services/${key}`} element={<Service service={el}/>}/>
                    })
                }
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </Container>
    )
}