import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filter.name;

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