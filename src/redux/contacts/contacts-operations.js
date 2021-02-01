import axios from 'axios';
import * as actions from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    axios
      .get('/contacts')
      .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
      .catch(error => dispatch(actions.fetchContactsError(error)));
  } catch (error) {
    console.log(error);
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());

  try {
    await axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(actions.addContactSuccess(data)))
      .catch(error => dispatch(actions.addContactError(error)));
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios
      .delete(`/contacts/${contactId}`)
      .then(() => dispatch(actions.deleteContactSuccess(contactId)))
      .catch(error => dispatch(actions.deleteContactError(error)));
  } catch (error) {
    console.log(error);
  }
};

export const editContact = contact => async dispatch => {
  const updatedContact = {
    name: contact.name,
    number: contact.number,
  };

  dispatch(actions.editContactRequest());

  try {
    await axios
      .patch(`/contacts/${contact.id}`, updatedContact)
      .then(() => dispatch(actions.editContactSuccess(contact)))
      .catch(error => dispatch(actions.editContactError(error)));
  } catch (error) {
    console.log(error);
  }
};
