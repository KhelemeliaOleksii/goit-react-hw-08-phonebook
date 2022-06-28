import { combineReducers } from "redux";
import { authReducers } from "./auth";
import { contactsReducers } from "./contacts";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}
export const rootReducer = combineReducers(
    {
        auth: persistReducer(authPersistConfig, authReducers),
        contacts: contactsReducers,
    }
) 