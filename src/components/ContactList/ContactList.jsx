import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function ContactsList() {
  const value = useSelector((state) => state.contacts.contacts.items);
  const nameToSearch = useSelector((state) => state.filters.filters.name);
  const [contacts, setContacts] = useState(value);

  useEffect(() => {
    setContacts(value);
  }, [value]);

  const filteredContacts = contacts.filter((contact) => {
    return contact.newContact.name
      .toLowerCase()
      .includes(nameToSearch.toLowerCase().trim());
  });

  const contactsMarkup = filteredContacts.map((contact) => {
    return (
      <li key={nanoid()} className={css.contactItem}>
        <Contact contact={contact}></Contact>
      </li>
    );
  });
  return <ul className={css.contactListItem}>{contactsMarkup}</ul>;
}
