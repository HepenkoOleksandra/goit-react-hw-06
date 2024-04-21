import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import '../App.css';
// import { useDispatch, useSelector } from "react-redux";
// import { addContact, deleteContact } from "../redux/contactsSlice";
// import { setFilter } from "../redux/filtersSlice";

function App() {
   
  // useEffect(() => {
  //   window.localStorage.setItem("contact", JSON.stringify(contacts));
  // }, [contacts]);
    
    return (
      <div className='container'>
        <h1 className='containerTitle'>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    )
  }

export default App