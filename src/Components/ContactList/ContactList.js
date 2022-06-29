import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import ContactItem from "../ContactItem";
import { useSelector } from 'react-redux';
import { contactsSelectors } from "../../redux/contacts";

export default function ContactList() {
    // const dispatch = useDispatch()
    // useEffect(() => { dispatch(contactsOperations.getContact()) }, [dispatch]);
    const contactsToShow = useSelector(contactsSelectors.getContactsToShow);
    const isContactExist = !!contactsToShow && contactsToShow.length > 0;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            {
                isContactExist ?
                    <Box sx={{ width: '100%' }}>
                        <List dense x={{ width: '100%' }}>
                            {contactsToShow.map((item) => {
                                return (
                                    // <ListItem key={item.id}>
                                    <ContactItem key={item.id} contact={item} />
                                    // </ListItem>
                                )
                            })}

                        </List>

                        {/* <Stack spacing={2}>

                            {contactsToShow.map((item) => {
                                return (
                                    <Item key={item.id}>
                                        <ContactItem contact={item} />
                                    </Item>)
                            })}

                        </Stack> */}
                    </Box>

                    :
                    <p>The contact list is empty</p>

            }
        </>


    )
}

