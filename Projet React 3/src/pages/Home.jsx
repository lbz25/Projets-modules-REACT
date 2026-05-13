import { useEffect, useState } from "react";
import { apiFetch } from "../lib/api";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiFetch("/articles")
      .then((res) => res.json())
      .then(setArticles);
  }, []);

  return (
    <div>
      <h1>Accueil</h1>
      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </div>
  );
}