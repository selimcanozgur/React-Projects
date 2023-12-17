import Item from "./Item";

function ItemList({ item }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Öncelik</th>
            <th>Görev</th>
          </tr>
        </thead>
        {item.map((product) => (
          <Item key={product._id} product={product} />
        ))}
      </table>
    </div>
  );
}

export default ItemList;
