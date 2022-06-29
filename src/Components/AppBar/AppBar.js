import { useSelector } from 'react-redux'
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import authSelectors from '../../redux/auth/auth-selectors';
import Box from '@mui/material/Box';
import AppBarWrapper from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBarWrapper position="static" sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: "wrap",
                justifyContent: "space-between",
                p: 1
            }}>
                <Typography variant="h6" component="div" >
                    <Navigation />
                </Typography>
                {isLoggedIn ?
                    <Typography variant="h6" component="div" >
                        <UserMenu />
                    </Typography>
                    :
                    <Typography variant="h6" component="div" >
                        <AuthNav />
                    </Typography>
                }            </AppBarWrapper>


        </Box >
    )
}

