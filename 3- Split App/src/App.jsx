import { useState } from "react";
import Buttons from "./components/Buttons";

const initialFriends = [
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
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);

  function newFriendsFunct(newFriends) {
    setFriends((friends) => [...friends, newFriends]);
  }

  function handleFriend() {
    setAddFriend(() => !addFriend);
  }
  return (
    <div>
      <FriendsList friends={friends} />
      <NewFriend />
      <Buttons>Add Friend</Buttons>
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map((item) => (
          <Friend key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ item }) {
  const { name, image, balance } = item;
  return (
    <li className="flex gap-4">
      <img src={image} alt={name} />
      <div className="friendInfo">
        <p>{name}</p>
        {balance < 0 && (
          <p className="text-red-500">
            You owe {name} {Math.abs(balance)}€
          </p>
        )}

        {balance > 0 && (
          <p className="text-green-500">
            {name} owes you {balance}€
          </p>
        )}

        {balance === 0 && (
          <p className="text-slate-800">You and {name} are even</p>
        )}
      </div>
      <Buttons>Select</Buttons>
    </li>
  );
}

function NewFriend({ newFriendsFunct, setAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const newFriends = { name, image, balance: 0 };
    newFriendsFunct(newFriends);
    setAddFriend(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Friend Name </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <Buttons>Add</Buttons>
    </form>
  );
}

export default App;
