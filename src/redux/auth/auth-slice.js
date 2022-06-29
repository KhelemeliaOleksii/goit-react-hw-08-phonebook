import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    // error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            // state.error = null;
        },
        [authOperations.register.rejected](state, action) {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
            // state.error = action.payload;
        },
        [authOperations.login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            // state.error = null;
        },
        [authOperations.logout.fulfilled](state, action) {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
            // state.error = null;
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
            // state.error = null;
        },
        [authOperations.fetchCurrentUser.rejected](state, action) {
            state.isFetchingCurrentUser = false;
            // state.error = action.payload;
        }
    },
})

export default authSlice.reducer;