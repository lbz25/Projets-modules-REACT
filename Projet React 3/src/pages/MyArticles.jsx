import { useEffect, useState } from "react";
import { apiFetch } from "../lib/api";
import ArticleCard from "../components/ArticleCard";

export default function MyArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiFetch("/my-articles")
      .then((res) => res.json())
      .then(setArticles);
  }, []);

  return (
    <div>
      <h2>Mes articles</h2>

      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </div>
  );
}