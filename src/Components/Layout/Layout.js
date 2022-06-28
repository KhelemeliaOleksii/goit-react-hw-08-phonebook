import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";
//import Container from "../Container";
import NotifyContainer from "../NotifyContainer/NotifyContainer";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function Layout() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Box sx={{ bgcolor: 'rgba(0,0,0,0.02)', p: 1 }}>
                    <AppBar />
                    <Outlet />
                    <NotifyContainer />

                </Box>
            </Container>
        </>
    )
}

