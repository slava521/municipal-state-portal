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
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',minHeight:'100vh'}}>
                    <Box>
                        <Header/>
                        <Main/>
                    </Box>
                    <Footer/>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
