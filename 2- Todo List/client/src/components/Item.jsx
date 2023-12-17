function Item({ product }) {
  const { text, count } = product;
  return (
    <li className="text-slate-200 flex">
      <label>{count}</label>
      <p>{text}</p>
    </li>
  );
}

export default Item;
