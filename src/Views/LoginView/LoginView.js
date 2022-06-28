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
    return (
        <form autoComplete="off" onSubmit={handlerOnSubmit} >
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handlerOnChange}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name='password'
                    value={password}
                    onChange={handlerOnChange}
                />
            </label>
            <button type="submit">LogIn</button>
        </form>

    )
}