import { NavLink } from 'react-router-dom'
import styles from './SignUp.module.css'
export default function SignUp() {
    return (
        <NavLink to='/register' className={({ isActive }) => (isActive ?
            styles['active-link'] : styles['link'])}>
            SignUp
        </NavLink>
    )
}