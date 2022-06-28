import { useDispatch, useSelector } from 'react-redux'
import { contactsSelectors } from "../../redux/contacts";
import { filterAction } from "../../redux/contacts/contacts-slice";
import {
    ThemeProvider,
    Box,
    Container,
    CssBaseline,
    TextField,
    createTheme
} from '@mui/material';
export default function ContactFilter() {
    const dispatch = useDispatch();
    const filter = useSelector(contactsSelectors.getFilter);
    // const [filter, setFilter] = useState('');
    const handlerOnChange = ({ target: { value } }) => {
        // setFilter(value);
        dispatch(filterAction(value));
    }
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='lg'>
                <CssBaseline />
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="contactFilter"
                        label="Filter"
                        name="filter"
                        type='text'
                        value={filter}
                        onChange={handlerOnChange}
                    />
                </Box>
            </Container>
        </ThemeProvider>

    )
    // return (
    //     <>
    //         <label htmlFor="contactFilterId">
    //             Search by name
    //             <input
    //                 type='text'
    //                 id="contactFilterId"
    //                 name="contactFilter"
    //                 value={filter}
    //                 onChange={handlerOnChange}
    //                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //                 title="Search by name"
    //                 required
    //             />
    //         </label>
    //     </>
    // )
}