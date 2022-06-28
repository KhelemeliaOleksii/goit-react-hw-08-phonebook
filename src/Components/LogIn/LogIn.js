import { NavLink } from "react-router-dom";
import styles from './LogIn.module.css'
export default function LogIn() {
    return (
        <NavLink to='/login' className={({ isActive }) => (isActive ?
            styles['active-link'] : styles['link'])} >
            LogIn
        </NavLink>
    )
}