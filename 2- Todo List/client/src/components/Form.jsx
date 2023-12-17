import { useState } from "react";

function Form({ datas }) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return alert("Text field cannot be left empty");
    const newItem = { text, count };
    datas(newItem);
    setText("");
    setCount(1);
  }
  return (
    <form className="flex justify-center gap-2 mt-8" onSubmit={handleSubmit}>
      <select
        className="rounded-full px-3"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        className="rounded-full px-4 py-2 outline-none"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-slate-200 px-3 py-2 rounded-full uppercase font-semibold ">
        Add
      </button>
    </form>
  );
}

export default Form;
