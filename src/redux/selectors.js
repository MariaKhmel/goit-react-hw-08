
import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;
export const selectError = (state) => state.contacts.error;
export const selectIsLoading = (state) => state.contacts.loading;

export const selectVisibleContacts =
    createSelector([selectNameFilter, selectContacts],
        (filterValue, contacts) => {
            if (filterValue === "") {
                return contacts;
            } else {
                const loweredCaseFilterValue = filterValue.toLowerCase();
                return contacts.filter(({ name }) =>
                    name.toLowerCase().includes(loweredCaseFilterValue)
                );
            }
        })
