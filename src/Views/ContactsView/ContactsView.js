import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations } from '../../redux/contacts';
import ContactList from "../../Components/ContactList/ContactList";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactFilter from "../../Components/ContactFilter";
import { authSelectors } from '../../redux/auth';

export default function ContactsView() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const dispatch = useDispatch()
    useEffect(() => {
        // if (isLoggedIn) {
        dispatch(contactsOperations.getContact())
        // }
    }, [dispatch]);
    return isLoggedIn ?
        (
            <>
                <h1>Phonebook</h1>
                <ContactForm />
                <h2>Contacts</h2>
                <ContactFilter />
                <ContactList />
            </>
        )
        : (<div>You are not loggined</div>)
}
