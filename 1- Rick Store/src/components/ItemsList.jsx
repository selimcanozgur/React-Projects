import Item from "./Item";

function ItemsList({ data }) {
  return (
    <main className="text-slate-300">
      <h2 className="text-2xl font-bold text-center tracking-[6px] uppercase my-8">
        Our Store
      </h2>
      <ul className="flex justify-center flex-wrap overflow-y-auto h-[460px] ">
        {data.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </main>
  );
}

export default ItemsList;
