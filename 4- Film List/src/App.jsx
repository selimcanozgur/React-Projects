import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [film, setFilm] = useState("");
  return (
    <div>
      <NavBar film={film} setFilm={setFilm} />
    </div>
  );
}

export default App;
