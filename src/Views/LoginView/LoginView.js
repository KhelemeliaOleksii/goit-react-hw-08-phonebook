import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";
import { useDispatch } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router-dom'
import authOperations from "../../redux/auth/auth-operations";

export default function LoginView() {
    // const location = useLocation();
    // const navigation = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        dispatch(authOperations.login({ email, password }))
        // if (location?.state?.from) {
        //     console.log("location.state.from.pathname", location.state.from.pathname);
        //     navigation(location.state.from.pathname, { replace: true })
        // }
        reset();
    }
    const handlerOnChange = ({ target: { name, value } }) => {
        switch (name) {
            case "email":
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    const reset = () => {
        setEmail('');
        setPassword('');
    }

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='lg'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handlerOnSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handlerOnChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handlerOnChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    )
}
