import { useState } from "react";
import { useDispatch } from 'react-redux'
import authOperations from "../../redux/auth/auth-operations";

export default function RegisterView() {
    const dispatch = useDispatch();
    const [nickname, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        dispatch(authOperations.register({ name: nickname, email, password }));
        resetState();
    }
    const resetState = () => {
        setNickName('');
        setEmail('');
        setPassword('');
    }
    const handlerOnChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'nickname':
                return setNickName(value);
            case 'email':

                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    return (
        <form autoComplete="off" onSubmit={handlerOnSubmit}>
            <label htmlFor="name-signup">
                Name
                <input
                    type='text'
                    name="nickname"
                    value={nickname}
                    onChange={handlerOnChange}
                    id="name-signup"
                />
            </label>
            <label htmlFor="email-signup">
                Email
                <input
                    type='email'
                    name="email"
                    value={email}
                    onChange={handlerOnChange}
                    id='email-signup'
                />
            </label>
            <label htmlFor="password-signup">
                Password
                <input
                    type='password'
                    name="password"
                    value={password}
                    onChange={handlerOnChange}
                    id='password-signup'
                />
            </label>
            <button type="submit">Sign Out</button>
        </form>
    )
}