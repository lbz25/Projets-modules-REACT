import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          onDelete={() => deleteContact(index)}
        />
      ))}
    </div>
  );
}

export default ContactList;