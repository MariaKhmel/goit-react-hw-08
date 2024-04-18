import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { useEffect } from "react";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const IsContactsSaved = contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {IsContactsSaved && <SearchBox />}
      {isLoading && <Spinner />}
      {IsContactsSaved && !isLoading && <ContactList />}
    </div>
  );
};

export default ContactsPage;
