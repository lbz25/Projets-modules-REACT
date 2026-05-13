import ArticleForm from "../components/ArticleForm";
import { apiFetch } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function CreateArticle() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await apiFetch("/articles", {
      method: "POST",
      body: JSON.stringify(data),
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Créer un article</h2>
      <ArticleForm onSubmit={handleCreate} />
    </div>
  );
}