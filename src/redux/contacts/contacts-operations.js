import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

const getContact = createAsyncThunk('contacts/get', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return error;
    }
});
const addContact = createAsyncThunk('contacts/add', async credentials => {
    try {
        const { data } = await axios.post('/contacts', credentials);
        return data;
    } catch (error) {
        return error;
    }
})
const deleteContact = createAsyncThunk('contacts/delete', async credentials => {
    try {
        await axios.delete(`/contacts/${credentials}`);
        return credentials;
    } catch (error) {
        return error;
    }
})
const updateContact = createAsyncThunk('contacts/update', async credentials => {
    try {
        const { id, ...update } = credentials;
        const { data } = await axios.patch(/contacts/`${id}`, update);
        return data;
    } catch (error) {
        return error;
    }
})

const contactsOperations = {
    getContact,
    addContact,
    deleteContact,
    updateContact,
};

export default contactsOperations;