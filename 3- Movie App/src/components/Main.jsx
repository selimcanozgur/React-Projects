import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import { useMovie } from "../context/MovieContext";
import Loader from "./Loader";
import Error from "./Error";

function Main() {
  const { loading, error, query } = useMovie();
  return (
    <div className="mt-8 flex justify-center">
      <div className="mt-72">{loading && <Loader />}</div>
      {!loading && !error && <MovieList />}
      {error && <Error message={error} />}
    </div>
  );
}

export default Main;
