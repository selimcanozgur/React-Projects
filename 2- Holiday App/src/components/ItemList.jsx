function ItemList({ item, deleteItem }) {
  const { text, piece, check, id } = item;

  return (
    <li>
      <div className="flex">
        <input type="checkBox" />
        <div className={check ? "line-through" : ""}>
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
