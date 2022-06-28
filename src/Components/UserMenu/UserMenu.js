import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
export default function UserMenu() {
    const email = useSelector(authSelectors.getUserEmail);
    const dispatch = useDispatch();
    return (
        <Box sx={{ display: "flex" }}>
            <Typography variant="h6" component="div" sx={{ mr: '10px', fontSize: '0.9em' }}>
                Wellcome, {email}
            </Typography>
            <Button variant="outlined" color="inherit" size="small" onClick={() => dispatch(authOperations.logout())}>LogOut</Button>
        </Box>
    )
}

