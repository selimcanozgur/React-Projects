import { useState, useEffect } from "react";
import axios from "axios";

function ItemList() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/items").then((res) => {
      setItem(res.data.data);
    });
  }, [item]);
  return (
    <div className="flex justify-center mt-[70px]">
      <table className="bg-orange-200 text-slate-950 font-semibold w-[800px] rounded-3xl text-center border-separate border-spacing-3 p-5 border border-slate-500">
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
