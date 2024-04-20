// import initialContacts from "./contacts.json";
import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsReducer";
import { setFilter } from "../redux/filtersSlice";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("contact")) ?? initialContacts;
  // });
  // const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);
  const filter = useSelector(state => {
    console.log(state);
    return state.filters.name
  });
  console.log(filter);

  const onAddContact = (dataForm) => {
    const newContact = dataForm;

    const action = addContact(newContact);
    
    dispatch(action);
    // setContacts((prevContacts) => {
    //   return [...prevContacts, newContact]
    // });
  }

  // useEffect(() => {
  //   window.localStorage.setItem("contact", JSON.stringify(contacts));
  // }, [contacts]);

  const onDelete = (contactId) => {
    const action = deleteContact(contactId);

    dispatch(action);
    
    // setContacts((prevContacts) => {
    //   return prevContacts.filter(contact => contact.id !== contactId);
    // })
  }

  const filterContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase()) ||
contact.number.toLowerCase().includes(filter.toLowerCase())
  }
  );
  
   const onChangeFilter = (searchTerm) => {
    const action = setFilter(searchTerm);
        dispatch(action);
  };
    
    return (
      <div className='container'>
        <h1 className='containerTitle'>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox filter={filter} onFilter={onChangeFilter} />
        <ContactList contacts={filterContacts} onDelete={onDelete} />
      </div>
    )
  }

  export default App