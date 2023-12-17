import Header from "./components/Header";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import axios from "axios";

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/items/").then((res) => {
      setItem(res.data.data);
    });
  }, [item]);

  return (
    <div>
      <Header />
      <Form />
      <ItemList item={item} />

      <p className="text-slate-200"></p>
    </div>
  );
}

export default App;
