import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";

const initialState = {
    filter: '',
    contacts: []
}
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: {
        [contactsOperations.getContact.fulfilled](state, action) {
            state.contacts = action.payload;
        },
        [contactsOperations.addContact.fulfilled](state, action) {
            const { payload } = action;
            state.contacts = [...state.contacts, payload];
        },
        [contactsOperations.deleteContact.fulfilled](state, action) {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload)
        }
        // [filter.action]
    }
})
export const { filter: filterAction } = contactsSlice.actions;

export default contactsSlice.reducer;