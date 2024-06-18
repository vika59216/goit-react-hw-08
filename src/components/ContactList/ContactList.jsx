import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contactsSlice";
//import { selectContacts } from "../../redux/contactsSlice";
//import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  //const contacts = useSelector(selectContacts);
  //const filter = useSelector(selectNameFilter);
  //const filterContacts = contacts.filter((contact) =>
   // contact.name.toLowerCase().includes(filter.toLowerCase())
    
    
  const filterContacts = useSelector(selectFilteredContacts);


  return (
    <ul className={css.personList}>
      {Array.isArray(filterContacts) && 
      filterContacts.map((contact) => {
        return (
          <li className={css.personItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList


