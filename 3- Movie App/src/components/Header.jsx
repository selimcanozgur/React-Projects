import { useMovie } from "../context/MovieContext";

function Header() {
  const { query, setQuery, movie } = useMovie();
  return (
    <header className="flex justify-around h-24 items-center bg-zinc-950">
      <p className="text-4xl text-slate-200 uppercase">🎬 Movie</p>
      <SearchMovie query={query} setQuery={setQuery} />
      <p className="text-slate-200 text-2xl font-semibold">
        🔎 Sonuç: {movie.length}
      </p>
    </header>
  );
}

function SearchMovie({ query, setQuery }) {
  return (
    <input
      className="w-72 h-8 rounded-full focus: outline-none bg-zinc-900 text-slate-300 px-4 py-6 capitalize"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
export default Header;
