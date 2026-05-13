# 📰 Mini Blog / Espace Membre (React + JWT)

## 📌 Description

Ce projet est une application web développée avec React permettant de gérer un mini blog avec authentification.

L’utilisateur peut s’inscrire, se connecter, créer des articles, les modifier, les supprimer et consulter les articles disponibles.

Certaines fonctionnalités sont protégées et accessibles uniquement aux utilisateurs connectés.

---

## 🚀 Fonctionnalités

### 🔐 Authentification
- Inscription (email / mot de passe)
- Connexion utilisateur
- Stockage du token JWT dans le localStorage
- Déconnexion
- Protection des routes privées

---

### 📝 Gestion des articles
- Affichage de la liste des articles (page d’accueil)
- Consultation du détail d’un article
- Création d’un article (utilisateur connecté)
- Modification d’un article (auteur uniquement)
- Suppression d’un article (auteur uniquement)
- Page “Mes articles”

---

### 🧭 Navigation
- Barre de navigation dynamique selon l’état de connexion
- Accès conditionnel aux pages protégées
- Page 404 pour les routes inexistantes

---

## 🛠️ Technologies utilisées

- React (Vite)
- React Router v6+
- Context API
- JavaScript (ES6+)
- CSS
- Node.js (backend API)

---

src/
│── App.jsx
│── main.jsx
│
├── context/
│ └── AuthContext.jsx
│
├── lib/
│ └── api.js
│
├── components/
│ ├── Navbar.jsx
│ ├── ProtectedRoute.jsx
│ ├── ArticleCard.jsx
│ └── ArticleForm.jsx
│
└── pages/
├── Home.jsx
├── Login.jsx
├── Register.jsx
├── ArticleDetail.jsx
├── CreateArticle.jsx
├── EditArticle.jsx
├── MyArticles.jsx
└── NotFound.jsx


---

## 🔐 Authentification

Le système d’authentification repose sur un token JWT :

- Le token est stocké dans le `localStorage`
- Les routes protégées vérifient la présence du token
- Le contexte global (AuthContext) gère l’état utilisateur

---

## 📡 API Backend

Le projet communique avec une API Node.js :

Exemples de routes utilisées :
- `POST /register` → inscription
- `POST /login` → connexion
- `GET /articles` → liste des articles
- `GET /articles/:id` → détail article
- `POST /articles` → création
- `PUT /articles/:id` → modification
- `DELETE /articles/:id` → suppression

---

## ▶️ Installation et lancement

```bash
npm install
npm run dev




## 🧱 Architecture du projet
