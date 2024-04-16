import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectContacts } from "./selectors";
import { toast } from "react-toastify";
import { selectNameFilter } from "./filtersSlice";

const onFetchPending = (state) => {
    state.loading = true;
    state.error = ''
}
const onFetchFullfilledGet = (state, action) => {
    state.loading = false;
    state.items = action.payload;
    state.error = ''
}
const onFetchFullfilledDelete = (state, action) => {
    state.loading = false;
    state.error = '';
    const deletedContactIndex = state.items.findIndex(item => item.id === action.payload.id);
    state.items.splice(deletedContactIndex, 1)
}
const onFetchFullfilledAdd = (state, action) => {
    state.loading = false;
    state.error = '';
    state.items.push(action.payload)
}

const onFetchError = (state, action) => {
    console.log(action)
    state.loading = false;
    state.error = action.payload;
    toast.error(action.payload)
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },

    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, onFetchPending)
            .addCase(fetchContacts.fulfilled, onFetchFullfilledGet)
            .addCase(fetchContacts.rejected, onFetchError)
            .addCase(deleteContact.pending, onFetchPending)
            .addCase(deleteContact.fulfilled, onFetchFullfilledDelete)
            .addCase(deleteContact.rejected, onFetchError)
            .addCase(addContact.pending, onFetchPending)
            .addCase(addContact.fulfilled, onFetchFullfilledAdd)
            .addCase(addContact.rejected, onFetchError)
    }
})

export const contactsReducer = contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
    [selectNameFilter, selectContacts],
    (filterValue, contacts) => {
        if (filterValue === "") {
            return contacts;
        } else {
            const loweredCaseFilterValue = filterValue.toLowerCase();
            return contacts.filter(({ name }) =>
                name.toLowerCase().includes(loweredCaseFilterValue)
            );
        }
    }
);


