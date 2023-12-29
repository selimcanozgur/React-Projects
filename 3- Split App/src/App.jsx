import { useState } from "react";
import Buttons from "./components/Buttons";

const users = [
  {
    id: 262626,
    name: "Selimcan",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: -7,
  },
  {
    id: 485968,
    name: "Özlem",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 668745,
    name: "Berke",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
];

function App() {
  const [datas, setData] = useState(users);
  return (
    <div>
      <ul>
        {datas.map((data) => (
          <li className="listStyle">
            <img className="imgStyle" src={data.image} />
            <div className="userInfo">
              <p className="nameStyle">{data.name}</p>
              <p>
                {data.balance < 0
                  ? `${data.name}'a ${data.balance} borcun var`
                  : `${data.name}'in sana ${data.balance} borcu var.`}
                {data.balance === 0 && "Kimsenin borcu yok"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
