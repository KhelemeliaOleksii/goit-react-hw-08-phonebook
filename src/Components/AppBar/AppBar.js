import { useSelector } from 'react-redux'
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import styles from './AppBar.module.css';
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

{/* 
        <header className={styles['header']}>
            <Navigation />
            {isLoggedIn ?
                <UserMenu />
                : <AuthNav />}
        </header>
 */}


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         News
//                     </Typography>
//                     <Button color="inherit">Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }
