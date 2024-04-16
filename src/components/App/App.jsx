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
import Layout from "../Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </>

    // <div className={css.container}>
    //   <ToastContainer />
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {isLoading ? <Spinner /> : isError ? <ErrorMessage /> : <ContactList />}
    // </div>
  );
}

export default App;
