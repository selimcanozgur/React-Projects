import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Items from "./components/Items";
import Footer from "./components/Footer";

function App() {
  const [items, setItem] = useState([]);

  function createItem(newItem) {
    setItem((items) => [...items, newItem]);
  }

  function deleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const bagSize = items.length;

  return (
    <div>
      <Header />
      <Form createItem={createItem} />
      <Items
        items={items}
        deleteItem={deleteItem}
        handleToggleItem={handleToggleItem}
      />
      {bagSize >= 1 && <Footer bagSize={bagSize} items={items} />}
    </div>
  );
}

export default App;
