import { useState } from "react";
import axios from "axios";

function Form() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { text, count };
    axios.post("http://localhost:3000/api/v1/items", newItem);
    setText("");
    setCount(1);
  }

  return (
    <form className="flex justify-center gap-2 mt-16" onSubmit={handleSubmit}>
      <select
        className="rounded-full px-3 w-16 focus:w-28 duration-300 text-slate-600 font-semibold focus:ring focus:ring-orange-300 text-xl"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
          <option className="bg-orange-200 text-slate-950" key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="rounded-full px-4 py-2 outline-none w-60 focus:w-72 duration-300 focus:ring focus:ring-orange-300"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="bg-slate-200 text-slate-700 px-3 py-2 rounded-full uppercase font-semibold ">
        Add Task
      </button>
    </form>
  );
}

export default Form;
