import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movie, setMovie] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "11f97e90";

  // Get Data
  useEffect(() => {
    const getData = async function () {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        // İnternet bağlantısı koptuğu zaman yer alan hata mesajı
        if (!res.ok) throw new Error("İnternet bağlantınızı kontrol ediniz");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Film Bulunamadı");

        setMovie(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      if (query.length < 3) {
        setMovie([]);
        setError("");
        return;
      }
    };
    getData();
  }, [query]);

  return (
    <MovieContext.Provider
      value={{ movie, loading, error, query, setQuery, watched, setWatched }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(MovieContext);
  if (context === undefined)
    throw new Error("Movie Context Movie Provider'ın dışında kullanııldı");
  return context;
}

export { MovieProvider, useMovie };
