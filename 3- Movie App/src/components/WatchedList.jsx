import { useMovie } from "../context/MovieContext";
import Stars from "../components/Stars";

function WatchedList() {
  const { watched } = useMovie();
  return (
    <div>
      <p></p>
    </div>
  );
}

export default WatchedList;
