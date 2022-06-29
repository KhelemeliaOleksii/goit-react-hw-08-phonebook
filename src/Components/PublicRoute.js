import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, redirectTo = '/contacts', restricted = false }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = restricted && isLoggedIn
    return !shouldRedirect ?
        (children)
        : (<Navigate replace to={redirectTo} />)
}