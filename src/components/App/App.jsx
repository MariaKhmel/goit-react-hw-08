import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Spinner from "../Spinner/Spinner";
import css from "./App.module.css";
import { fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "../../redux/selectors";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ToastContainer />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading ? <Spinner /> : isError ? <ErrorMessage /> : <ContactList />}
    </div>
  );
}

export default App;
