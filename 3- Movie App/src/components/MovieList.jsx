import { useMovie } from "../context/MovieContext";

function MovieList() {
  const { movie, loading } = useMovie();
  return (
    <>
      <ul className="px-4 py-6">
        {movie.map((mov) => (
          <Movie key={mov.imdbID} mov={mov} />
        ))}
      </ul>
    </>
  );
}

function Movie({ mov }) {
  const { Title, Year, Poster } = mov;
  return (
    <li className="flex">
      <img className="w-24" src={Poster} />
      <div>
        <p className="font-semibold text-2xl"> 🎥 {Title}</p>
        <p className="text-xl"> 📅 {Year}</p>
      </div>
    </li>
  );
}

export default MovieList;
