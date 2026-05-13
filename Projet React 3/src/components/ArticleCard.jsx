import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.content.slice(0, 100)}...</p>
      <Link to={`/article/${article.id}`}>Voir</Link>
    </div>
  );
}