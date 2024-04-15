import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactsList}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
