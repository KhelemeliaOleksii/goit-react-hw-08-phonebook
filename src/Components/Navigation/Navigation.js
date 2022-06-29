import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { authSelectors } from "../../redux/auth";

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <>
            <nav>
                <NavLink to='/'
                    className={({ isActive }) => (isActive ?
                        styles["active-link"] : styles['link'])}
                >
                    Home
                </NavLink>
                {isLoggedIn &&
                    <NavLink to='/contacts'
                        className={({ isActive }) => (isActive ?
                            styles['active-link'] : styles['link'])}
                    >
                        Contacts
                    </NavLink>
                }
            </nav>
        </>
    )
}