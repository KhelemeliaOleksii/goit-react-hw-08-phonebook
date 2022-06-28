import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";
import Container from "../Container";
import NotifyContainer from "../NotifyContainer/NotifyContainer";
export default function Layout() {
    return (
        <Container >
            <AppBar />
            <Outlet />
            <NotifyContainer />
        </Container>
    )
}