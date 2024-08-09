import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/action';
import { getContacts, getFilter } from '../redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  console.log('contacts', contacts);
  console.log('filter', filter);

  const handleAddContact = newContact => {
    // Placeholder for future Redux action
    console.log('Add contact placeholder:', newContact);
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    // Placeholder for future Redux action
    console.log('Delete contact placeholder:', id);
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    // Placeholder for future Redux dispatch to update filter
    console.log('Filter change placeholder:', newFilter);
    dispatch(setFilter(newFilter));
  };

  // Calculate filtered contacts directly within the App component
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      <ContactList
        contacts={filteredContacts} // Passing the filteredContacts as prop
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};