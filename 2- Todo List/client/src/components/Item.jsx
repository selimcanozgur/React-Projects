function Item({ product }) {
  const { text, count } = product;
  return (
    <tbody className="text-slate-200 flex">
      <tr>
        <td>{count}</td>
        <td>{text}</td>
      </tr>
    </tbody>
  );
}

export default Item;
