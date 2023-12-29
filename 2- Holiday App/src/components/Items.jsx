import ItemList from "./ItemList";

function Items({ items, deleteItem, handleToggleItem }) {
  return (
    <div className="flex justify-center menu">
      <ul className="bg-orange-200 p-12 justify-center h-96 w-[900px] flex flex-wrap rounded-2xl">
        {items.map((item) => (
          <ItemList
            key={item.id}
            item={item}
            handleToggleItem={handleToggleItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default Items;
