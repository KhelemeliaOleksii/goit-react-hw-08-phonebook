import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import notifier from 'services/notify/notify'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
// axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}
const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        notifier.error("Error in registration procedure")
        return thunkAPI.rejectWithValue(error.message);
    }
})

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        notifier.error("Error in login procedure")
        return thunkAPI.rejectWithValue(error.message);
    }
})

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        notifier.error("Error in logout procedure")
        return thunkAPI.rejectWithValue(error.message);
    }
})

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('no users logined');
    }
    token.set(persistedToken);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        notifier.error("Error in authentication procedure")
        return thunkAPI.rejectWithValue(error.message);
    }
})

const authOperations = {
    register,
    login,
    logout,
    fetchCurrentUser,
}
export default authOperations 