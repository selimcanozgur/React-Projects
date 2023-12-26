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
    <form className="flex justify-center my-6 gap-4" onSubmit={handleSubmit}>
      <select
        className="border rounded-full py-3 px-4 focus:outline-none"
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
        /*
         className="w-44 border border-red-500 rounded-full transition-all duration-500 focus:w-72"
        */
        className="w-52 transition-all  duration-500 border py-3 px-4 focus:outline-none border-orange-400 rounded-full focus:w-72"
        type="text"
      />
      <button className="bg-green-400 font-semibold w-24 uppercase text-slate-50 rounded-full">
        Add
      </button>
    </form>
  );
}

export default Form;
