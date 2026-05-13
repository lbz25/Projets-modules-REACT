import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "../lib/api";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    apiFetch(`/articles/${id}`)
      .then((res) => res.json())
      .then(setArticle);
  }, [id]);

  if (!article) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <small>Auteur : {article.author}</small>
    </div>
  );
}