import { useSelector, useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
export default function UserMenu() {
    const email = useSelector(authSelectors.getUserEmail);
    const dispatch = useDispatch();
    return (
        <div>
            <span>Wellcome, {email} </span>
            <button type="button" onClick={() => dispatch(authOperations.logout())}>LogOut</button>
        </div>
    )
}