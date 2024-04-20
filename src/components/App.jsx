// import initialContacts from "./contacts.json";
import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("contact")) ?? initialContacts;
  // });
  // const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filters);

  const onAddContact = (dataForm) => {
    const newContact = dataForm;

    const action = { type: "contact/ADD_CONTACT", payload: newContact };
    
    dispatch(action);
    // setContacts((prevContacts) => {
    //   return [...prevContacts, newContact]
    // });
  }

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const onDelete = (contactId) => {
    const action = { type: "contact/DELETE_CONTACT", payload: contactId };

    dispatch(action);
    
    // setContacts((prevContacts) => {
    //   return prevContacts.filter(contact => contact.id !== contactId);
    // })
  }

   const filterContacts = contacts.filter((contact) =>     
    contact.name.toLowerCase().includes(filter.toLowerCase())
   );
  
  const onChangeFilter = (searchTerm) => {
    const action = { type: "contact/SET_FILTER", payload: searchTerm };

    dispatch(action);
    // setFilter(event.target.value);
  };
   
    return (
      <div className='container'>
        <h1 className='containerTitle'>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox value={filter} onFilter={onChangeFilter()} />
        <ContactList contacts={filterContacts} onDelete={onDelete} />
      </div>
    )
  }

  export default App