import { createSelector } from "@reduxjs/toolkit";

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.contacts;

const getContactsToShow = createSelector([getContacts, getFilter], (contacts, filter) =>
    configureContactsToShow(contacts, filter)
)

/* function normilizedComparision
in: - "basicName"
    - "testName" 
do: - check if the nomalized "basicName" includes the nomalized "testName"
out:- true - the nomalized "basicName" includes the nomalized "testName"
    - false - opposite case
*/
const normilizedComparision = (basicName, testName) =>
    basicName.toLowerCase().includes(testName.toLowerCase());

/* function configureContactsToShow
in: - "contacts" - a list of contacts
    - "keyFilter" - a value of filter
do: - filter contacts that inlude "keyFilter"
out:- a list of filtered contacts
*/
const configureContactsToShow = (contacts, keyFilter) => {
    if (keyFilter === '') {
        return contacts;
    }
    return contacts.filter(({ name }) => normilizedComparision(name, keyFilter));
}

const contactsSelectors = {
    getContactsToShow,
    getFilter,
    getContacts,
}
export default contactsSelectors;