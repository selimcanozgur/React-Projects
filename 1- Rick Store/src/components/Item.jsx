function Item({ item }) {
  const { itemName, itemDescription, price, img } = item;
  return (
    <li className="flex w-[600px]">
      <img className="h-14 my-auto" src={img} />
      <div className="info mx-6 my-12">
        <p className="text-2xl font-semibold uppercase itemName">{itemName}</p>
        <p className="text-sm mt-2 itemDescription">{itemDescription}</p>
        <p className="mt-3 font-semibold price">{price} 💲</p>
      </div>
      <hr />
    </li>
  );
}

export default Item;
