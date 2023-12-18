function ItemList({ item }) {
  return (
    <div className="flex justify-center mt-[70px]">
      <table className="bg-slate-800 text-slate-200 w-[800px] rounded-md text-center border-separate border-spacing-3 p-5 border border-slate-500">
        <thead>
          <tr>
            <th> Filter </th>
            <th> Task </th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr key={item._id}>
              <td className="border-separate border border-slate-500 rounded-lg">
                {item.count}
              </td>
              <td className="border-separate border border-slate-500 rounded-lg">
                {item.text}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
