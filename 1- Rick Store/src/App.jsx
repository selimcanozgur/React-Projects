import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

const data = [
  {
    itemName: "IQ Enhancing Helmet",
    itemDescription:
      "The IQ increase is proportional to the amount of voltage in it, controled by the number of batteries. Five of these can make dogs smarter than humans.",
    img: "public/img/iq.png",
    price: 850,
  },
  {
    itemName: "Portal Gun",
    itemDescription:
      "The Portal Gun is a gadget that allows the user(s) to travel between different universes/dimensions/realities. The device was first created by Rick Prime.",
    img: "public/img/portal-gun.png",
    price: 950,
  },
  {
    itemName: "Meeseeks Box",
    itemDescription:
      "It was introduced in the episode Meeseeks and Destroy. It is a gadget which creates a Mr. Meeseeks for the purpose of completing one objective. Once it completes the objective, Mr. Meeseeks vanishes.",
    img: "public/img/me-box.png",
    price: 620,
  },
  {
    itemName: "Paralyze Cure",
    itemDescription:
      "Paralyze Cure is an item in Pocket Mortys. It is used to cure Mortys who have been affected with Paralysis in battle. Paralyze Cure can be won, bought, or crafted.",
    img: "public/img/paralyz-cure.png",
    price: 450,
  },
  {
    itemName: "Serum",
    itemDescription:
      "Serum is a craftable item in Pocket Mortys. Heals 20 HP and can be used in or out of battle. It's easy to find, but things can get difficult if you don't have it with you when needed.",
    img: "public/img/serum-1.png",
    price: 20,
  },
  {
    itemName: "Great Serum",
    itemDescription:
      "Serum is a craftable item in Pocket Mortys. Heals 50 HP and can be used in or out of battle. It is harder to find than normal serum, but it can be found easily.",
    img: "public/img/serum-3.png",
    price: 45,
  },
  {
    itemName: "Sensational Serum",
    itemDescription:
      "Serum is a craftable item in Pocket Mortys. Heals 200 HP and can be used in or out of battle. It is a hard part to find, not everyone can easily access it.",
    img: "public/img/serum-2.png",
    price: 180,
  },

  {
    itemName: "IQ Enhancing Helmet",
    itemDescription:
      "Serum is a craftable item in Pocket Mortys. It heals full HP and can be used in or out of battle. It is one of the rarest serums to find and fills all the HP.",
    img: "public/img/serum-4.png",
    price: 400,
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
