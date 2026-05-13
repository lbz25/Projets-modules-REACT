import { useState } from "react";

function TodoForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;