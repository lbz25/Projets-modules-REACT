import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Gestionnaire de contacts</h1>

      <ContactForm addContact={addContact} />

      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

// Recherche 
const [search, setSearch] = useState("");
//Filtrage
const filteredContacts = contacts.filter(c =>
  c.nom.toLowerCase().includes(search.toLowerCase())
);
//Tri par nom
const sortedContacts = [...contacts].sort((a, b) =>
  a.nom.localeCompare(b.nom)
);

//Validation email simple
const emailValid = form.email.includes("@");



export default App;