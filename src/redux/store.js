import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
});


const store = configureStore({
    reducer: rootReducer,

})


export default store;