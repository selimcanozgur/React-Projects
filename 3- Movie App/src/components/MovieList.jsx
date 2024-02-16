import { useMovie } from "../context/MovieContext";

function MovieList() {
  const { movie, setWatched } = useMovie();
  return (
    <div className="flex-wrap overflow-y-auto rounded-2xl bg-zinc-950 h-[580px] w-[400px] ">
      <ul className="px-4 py-6">
        {movie.map((mov) => (
          <Movie key={mov.imdbID} mov={mov} setWatched={setWatched} />
        ))}
      </ul>
    </div>
  );
}

function Movie({ mov, setWatched }) {
  const { Title, Year, Poster } = mov;
  function handleSubmit(e) {
    e.preventDefault();
    const watchedFilm = { Title, Year, Poster };
    setWatched(watchedFilm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>
        <li className="flex text-slate-200 py-4 gap-5 cursor-pointer">
          <img className="w-16 rounded-2xl" src={Poster} />
          <div className="mt-4">
            <p className="font-semibold text-xl"> 🎥 {Title}</p>
            <p className="mt-4"> 📅 {Year}</p>
          </div>
        </li>
      </button>
    </form>
  );
}

export default MovieList;
