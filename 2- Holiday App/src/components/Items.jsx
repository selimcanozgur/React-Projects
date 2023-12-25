import ItemList from "./ItemList";

function Items({ items, deleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <ItemList key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
}

export default Items;
