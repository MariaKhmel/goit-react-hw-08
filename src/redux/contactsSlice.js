import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const onFetchPending = (state) => {
    state.loading = true;
}
const onFetchFullfilledGet = (state, action) => {
    state.loading = false;
    state.items = action.payload;
    state.error = ''
}
const onFetchFullfilledDelete = (state, action) => {
    state.loading = false;
    state.error = null;
    const deletedContactIndex = state.items.findIndex(item => item.id === action.payload.id);
    state.items.splice(deletedContactIndex, 1)
}
const onFetchFullfilledAdd = (state, action) => {
    state.items.push(action.payload)
}

const onFetchError = (state, action) => {
    console.log(action.payload)
    state.error = action.payload;
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

    }
})

export const contactsReducer = contactsSlice.reducer;




