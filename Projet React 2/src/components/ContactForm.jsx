import { useState } from "react";

function ContactForm({ addContact }) {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
    setForm({ prenom: "", nom: "", email: "", telephone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="prenom" placeholder="Prénom" onChange={handleChange} value={form.prenom} />
      <input name="nom" placeholder="Nom" onChange={handleChange} value={form.nom} />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <input name="telephone" placeholder="Téléphone" onChange={handleChange} value={form.telephone} />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ContactForm;