import { useState } from "react";
import { apiFetch } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    await apiFetch("/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Inscription</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>S'inscrire</button>
    </form>
  );
}