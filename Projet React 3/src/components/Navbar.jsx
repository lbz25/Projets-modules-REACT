import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Accueil</Link>

      {user ? (
        <>
          <Link to="/create">Créer</Link>
          <Link to="/my-articles">Mes articles</Link>
          <button onClick={logout}>Déconnexion</button>
        </>
      ) : (
        <>
          <Link to="/login">Connexion</Link>
          <Link to="/register">Inscription</Link>
        </>
      )}
    </nav>
  );
}