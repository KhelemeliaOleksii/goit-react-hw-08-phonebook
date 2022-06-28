import ContactItem from "../ContactItem";
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { useEffect } from "react";

export default function ContactList() {
    // const dispatch = useDispatch()
    // useEffect(() => { dispatch(contactsOperations.getContact()) }, [dispatch]);
    const contactsToShow = useSelector(contactsSelectors.getContactsToShow);
    const isContactExist = !!contactsToShow && contactsToShow.length > 0;
    return (
        <>
            {
                isContactExist ?
                    <ul>
                        {contactsToShow.map((item) => {
                            return (<ContactItem key={item.id} contact={item} />)
                        })}

                    </ul>
                    :
                    <p>The contact list is empty</p>

            }
        </>


    )
}