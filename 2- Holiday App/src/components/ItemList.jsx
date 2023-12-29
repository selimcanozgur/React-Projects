function ItemList({ item, deleteItem, handleToggleItem }) {
  const { text, piece, packed, id } = item;

  return (
    <li>
      <div className="flex">
        <input type="checkBox" onChange={() => handleToggleItem(id)} />
        <div className={packed ? "line-through" : ""}>
          <p className="font-semibold px-2">
            {piece} {text}
          </p>
        </div>
        <button className="mr-10" onClick={() => deleteItem(id)}>
          ❌
        </button>
      </div>
    </li>
  );
}

export default ItemList;
