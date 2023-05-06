import './App.css';
import Header from "./header/Header";
import React from "react";
import {Box, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {BrowserRouter} from "react-router-dom";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box>
                    <Header/>
                    <Main/>
                    <Footer/>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
