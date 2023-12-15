import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

const data = [
  {
    itemName: "IQ Enhancing Helmet",
    itemDescription:
      "The IQ increase is proportional to the amount of voltage in it, controled by the number of batteries. Five of these can make dogs smarter than humans.",
    img: "public/img/iq.png",
    price: 250,
  },
  {
    itemName: "Portal Gun",
    itemDescription:
      "The Portal Gun is a gadget that allows the user(s) to travel between different universes/dimensions/realities. The device was first created by Rick Prime.",
    img: "public/img/portal-gun.png",
    price: 900,
  },
  {
    itemName: "Meeseeks Box",
    itemDescription:
      "It was introduced in the episode Meeseeks and Destroy. It is a gadget which creates a Mr. Meeseeks for the purpose of completing one objective. Once it completes the objective, Mr. Meeseeks vanishes.",
    img: "public/img/me-box.png",
    price: 50,
  },
  {
    itemName: "Paralyze Cure",
    itemDescription:
      "Paralyze Cure is an item in Pocket Mortys. It is used to cure Mortys who have been affected with Paralysis in battle. Paralyze Cure can be won, bought, or crafted.",
    img: "public/img/paralyz-cure.png",
    price: 450,
  },
  {
    itemName: "IQ Enhancing Helmet",
    itemDescription:
      "The IQ increase is proportional to the amount of voltage in it, controled by the number of batteries. Five of these can make dogs smarter than humans.",
    img: "public/img/iq.png",
    price: 24,
  },
  {
    itemName: "IQ Enhancing Helmet",
    itemDescription:
      "The IQ increase is proportional to the amount of voltage in it, controled by the number of batteries. Five of these can make dogs smarter than humans.",
    img: "public/img/iq.png",
    price: 24,
  },
  {
    itemName: "IQ Enhancing Helmet",
    itemDescription:
      "The IQ increase is proportional to the amount of voltage in it, controled by the number of batteries. Five of these can make dogs smarter than humans.",
    img: "public/img/iq.png",
    price: 24,
  },
  {
    itemName: "IQ Enhancing Helmet",
    itemDescription:
      "The IQ increase is proportional to the amount of voltage in it, controled by the number of batteries. Five of these can make dogs smarter than humans.",
    img: "public/img/iq.png",
    price: 24,
  },
];

const dataSize = data.length;

function App() {
  return (
    <div>
      <Header dataSize={dataSize} />
      <ItemsList data={data} />
      <Footer />
    </div>
  );
}

export default App;
