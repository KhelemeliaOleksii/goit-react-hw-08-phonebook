import { useSelector } from 'react-redux'
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import styles from './AppBar.module.css';
import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <header className={styles['header']}>
            <Navigation />
            {isLoggedIn ?
                <UserMenu />
                : <AuthNav />}


        </header>

    )
}