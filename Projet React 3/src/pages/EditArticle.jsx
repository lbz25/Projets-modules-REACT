import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiFetch } from "../lib/api";
import ArticleForm from "../components/ArticleForm";

export default function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    apiFetch(`/articles/${id}`)
      .then((res) => res.json())
      .then(setArticle);
  }, [id]);

  const handleUpdate = async (data) => {
    await apiFetch(`/articles/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    navigate(`/article/${id}`);
  };

  if (!article) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Modifier article</h2>
      <ArticleForm onSubmit={handleUpdate} initialData={article} />
    </div>
  );
}