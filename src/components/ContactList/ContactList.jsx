import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

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
