import React, {Component} from "react";
import {Box, Container} from "@mui/material";


interface Props {
}

export default class Footer extends Component<Props, any> {
    render() {
        return (
            <Box sx={{backgroundColor:'primary.main',color:'primary.contrastText'}}>
                <Container>
                    footer
                </Container>
            </Box>
        )
    }
}