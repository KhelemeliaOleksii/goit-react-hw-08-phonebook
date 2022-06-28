import { createTheme, ThemeProvider } from "@mui/material";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import notifier from "../../services/notify/notify";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch()

    const contacts = useSelector(contactsSelectors.getContacts);
    const isContactsContainName = contacts.find((item) => item.name === name);
    const isCorrectValue = (value) => {
        if (value.trim() === '') {
            return false;
        }
        return true;
    }
    const handlerOnSubmit = (event) => {
        event.preventDefault();

        if (!isCorrectValue(name) || !isCorrectValue(number)) {
            reset();
            return
        }

        if (isContactsContainName) {
            notifier.info(`Contact with name ${name} already exists!`)
        } else {
            dispatch(contactsOperations.addContact({ name, number }));
            notifier.success(`Contact with name ${name} add to list!`)
        }
        reset();
    }
    const handlerOnChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'number':
                return setNumber(value);
            default:
                return;
        }
    }
    const reset = () => {
        setName('');
        setNumber('');
        console.log("Reset finished!");
    }
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='lg'>
                <CssBaseline />
                <Box component="form" onSubmit={handlerOnSubmit} validate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        type='text'
                        value={name}
                        autoFocus
                        onChange={handlerOnChange}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        inputProps={{
                            pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="number"
                        label="Number"
                        type="tel"
                        id="number"
                        value={number}
                        onChange={handlerOnChange}
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        inputProps={{ pattern: "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add contact
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>

    )
    // return (
    //     <form autoComplete="off" onSubmit={handlerOnSubmit}>
    //         <label htmlFor="contactNameId"> Name
    //             <input
    //                 type="text"
    //                 id="contactNameId"
    //                 value={name}
    //                 name='name'
    //                 onChange={handlerOnChange}
    //                 required
    //                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //             />
    //         </label>
    //         <label htmlFor="contactNumberId">
    //             Phone number
    //             <input
    //                 type="tel"
    //                 id="contactNumberId"
    //                 value={number}
    //                 name='number'
    //                 onChange={handlerOnChange}
    //                 required
    //                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //             />
    //         </label>
    //         <button type="submit">Add contact</button>
    //     </form>
    // )

}


