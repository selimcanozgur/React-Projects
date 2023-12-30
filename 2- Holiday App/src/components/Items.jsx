import { useState } from "react";
import ItemList from "./ItemList";

function Items({ items, deleteItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.text.localeCompare(b.text));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="flex justify-center menu">
      <ul className="12 justify-center h-96 w-[900px] flex flex-wrap rounded-2xl items">
        {sortedItems.map((item) => (
          <ItemList
            key={item.id}
            item={item}
            handleToggleItem={handleToggleItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <div className="absolute top-[520px]">
        <select
          className="rounded-full p-2 focus:outline-none text-center uppercase"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

export default Items;
