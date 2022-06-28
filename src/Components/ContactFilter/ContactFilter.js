import { useDispatch, useSelector } from 'react-redux'
import { contactsSelectors } from "../../redux/contacts";
import { filterAction } from "../../redux/contacts/contacts-slice";

export default function ContactFilter() {
    const dispatch = useDispatch();
    const filter = useSelector(contactsSelectors.getFilter);
    // const [filter, setFilter] = useState('');
    const handlerOnChange = ({ target: { value } }) => {
        // setFilter(value);
        dispatch(filterAction(value));
    }
    return (
        <>
            <label htmlFor="contactFilterId">
                Search by name
                <input
                    type='text'
                    id="contactFilterId"
                    name="contactFilter"
                    value={filter}
                    onChange={handlerOnChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Search by name"
                    required
                />
            </label>
        </>
    )
}