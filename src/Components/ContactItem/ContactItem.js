import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { contactsOperations } from '../../redux/contacts'

export default function ContactItem({ contact }) {
    const { id, name, number } = contact;
    const dispatch = useDispatch();
    const isButtonDeleteDisabled = false;
    const handlerOnClickDelete = (id) => {
        dispatch(contactsOperations.deleteContact(id))
    }
    // const handlerOnClickUpdate = (id) => {
    //     console.log("Update contact with id:", id);
    // }

    return (
        <ListItem >
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar {...stringAvatar(name)} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={number} />
                <Button variant="contained" onClick={() => handlerOnClickDelete(id)} disabled={isButtonDeleteDisabled}>Delete</Button>
                {/* <p>{name}</p>
                <p>{number}</p> */}
                {/* <button type="button" >
                    Delete
                </button> */}
                {/* <button type="button" onClick={() => handlerOnClickUpdate(id)} disabled>
                Update
            </button> */}

            </ListItemButton>
        </ListItem>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}

function stringAvatar(name) {
    const extrudeFirstLetters = () => {
        const words = name.split(" ");
        const cortege = words.map((item) => item[0]).join('');
        return cortege;

    };
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return {
        sx: {
            bgcolor: `#${randomColor}`,
        },
        children: `${extrudeFirstLetters()}`,
    };
}