import { useSelector } from 'react-redux';
import { authSelectors } from "../redux/auth";
import { Navigate } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children, redirectTo = '/login' }) {
    /* Щоб повернутися до цієї сторінки після процедури login 
    * передаємо в location.state звідки нас перенаправило
    * - додано також в компонент, куди відбувається перенаправлення,
    * props{state}
    * В нашому випадку це сторінка LoginView
    * 
    * ??? не працює, потрібно двічі логіниться
    * ??? з першого разу isLoggedIn оновлюється після рендера сторінки
    *   
    */
    // Розкоментуй мене 
    // const location = useLocation();
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // console.log("isLoggedIn", isLoggedIn);
    // return isLoggedIn ?
    //     (children)
    //     : (<Navigate replace to={redirectTo} state={{ from: location }} />)
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ?
        (children)
        : (<Navigate replace to={redirectTo} />)

}