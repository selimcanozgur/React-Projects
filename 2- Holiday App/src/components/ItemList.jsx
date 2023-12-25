function ItemList({ item, deleteItem }) {
  const { text, piece, check, id } = item;

  return (
    <li className="flex gap-2">
      <input type="checkBox" />
      <div className={check ? "line-through" : ""}>
        <p>
          {piece}
          {text}
        </p>
      </div>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
}

export default ItemList;
