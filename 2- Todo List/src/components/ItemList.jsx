import Item from "./Item";

function ItemList({ item }) {
  return (
    <div>
      <ul>
        {item.map((product) => (
          <Item key={product} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
