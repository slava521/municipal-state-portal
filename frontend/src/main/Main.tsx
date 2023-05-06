import React, {Component} from "react";
import {Container} from "@mui/material";
import HomePage from "./HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import ServicesPage from "./ServicesPage/ServicesPage";
import NewsPage from "./NewsPage/NewsPage";
import AboutPage from "./AboutPage/AboutPage";
import ContactsPage from "./ContactsPage/ContactsPage";


interface Props {
}

export default class Main extends Component<Props, any> {
    render() {
        return (
            <Container>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/services' element={<ServicesPage/>}/>
                    <Route path='/news' element={<NewsPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/contacts' element={<ContactsPage/>}/>
                </Routes>

            </Container>
        )
    }
}