import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';

const ContactsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
