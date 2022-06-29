import Box from '@mui/material/Box';
import List from '@mui/material/List';

import ContactItem from "../ContactItem";
import { useSelector } from 'react-redux';
import { contactsSelectors } from "../../redux/contacts";

export default function ContactList() {
    const contactsToShow = useSelector(contactsSelectors.getContactsToShow);
    const isContactExist = !!contactsToShow && contactsToShow.length > 0;

    return (
        <>
            {
                isContactExist ?
                    <Box sx={{ width: '100%' }}>
                        <List dense x={{ width: '100%' }}>
                            {contactsToShow.map((item) => {
                                return (
                                    <ContactItem key={item.id} contact={item} />
                                )
                            })}
                        </List>
                    </Box>
                    :
                    <p>The contact list is empty</p>
            }
        </>
    )
}

