import MovieList from "./MovieList";
import { useMovie } from "../context/MovieContext";
import Loader from "./Loader";

function Main() {
  const { loading } = useMovie();
  return <div>{loading ? <Loader /> : <MovieList />}</div>;
}

export default Main;
