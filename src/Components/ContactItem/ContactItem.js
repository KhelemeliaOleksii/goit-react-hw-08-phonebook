import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { contactsOperations } from '../../redux/contacts'

export default function ContactItem({ contact }) {
    const { id, name, number } = contact;
    const dispatch = useDispatch();
    const isButtonDeleteDisabled = false;
    // console.log('ContactItem id', id);
    const handlerOnClickDelete = (id) => {
        dispatch(contactsOperations.deleteContact(id))
    }
    const handlerOnClickUpdate = (id) => {
        console.log("Update contact with id:", id);
    }

    return (
        <li>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => handlerOnClickDelete(id)} disabled={isButtonDeleteDisabled}>
                Delete
            </button>
            <button type="button" onClick={() => handlerOnClickUpdate(id)} disabled>
                Update
            </button>
        </li>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}
// ContactItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// }
