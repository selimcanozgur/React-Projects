import { useState } from "react";

function Form({ createItem }) {
  const [text, setText] = useState("");
  const [piece, setPiece] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    const newItem = { text, piece, check: false, id: Date.now() };
    createItem(newItem);
    setText("");
    setPiece(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        className="border rounded-full focus:outline-none"
        value={piece}
        onChange={(e) => Number(setPiece(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border py-3 px-4 focus:outline-none border-orange-400 rounded-full"
        type="text"
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
