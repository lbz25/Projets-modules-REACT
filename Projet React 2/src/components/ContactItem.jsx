function ContactItem({ contact, onDelete }) {
  return (
    <div>
      <p>{contact.prenom} {contact.nom}</p>
      <p>{contact.email}</p>
      <p>{contact.telephone}</p>

      <button onClick={onDelete}>Supprimer</button>
    </div>
  );
}

export default ContactItem;