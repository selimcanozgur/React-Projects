import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Items from "./components/Items";

function App() {
  const [items, setItem] = useState([]);

  function createItem(newItem) {
    setItem((items) => [...items, newItem]);
  }

  function deleteItem(id) {
    setItem((items) => [items.filter((item) => item.id !== id)]);
  }

  return (
    <div>
      <Header />
      <Form createItem={createItem} />
      <Items items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
