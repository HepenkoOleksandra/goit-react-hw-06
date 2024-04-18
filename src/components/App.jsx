import initialContacts from "./contacts.json";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import '../App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contact")) ?? initialContacts;
  });
  const [filter, setFilter] = useState("");

  const onAddContact = (dataForm) => {
    console.log(dataForm);
    const newContact = dataForm;

    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  }

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const onDelete = (contsctId) => {
      setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contsctId);
    })
  }

   const filterContacts = contacts.filter((contact) =>     
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
   
    return (
      <div className='container'>
        <h1 className='containerTitle'>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filterContacts} onDelete={onDelete} />
      </div>
    )
  }

  export default App;