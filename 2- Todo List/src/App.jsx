import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import ItemList from "./components/ItemList";

function App() {
  const [item, setItem] = useState([]);
  function datas(newItem) {
    setItem((item) => [...item, newItem]);
  }

  return (
    <div>
      <Header />
      <Form datas={datas} />
      <ItemList item={item} />

      <p className="text-slate-200"></p>
    </div>
  );
}

export default App;
