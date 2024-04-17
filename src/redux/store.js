import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from './filters/slice';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

}

)
export const persistor = persistStore(store);
export default store;