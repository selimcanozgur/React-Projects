import Header from "./components/Header";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

function App() {
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
