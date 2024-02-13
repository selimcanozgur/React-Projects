import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get Data
  useEffect(() => {
    const getData = async function () {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=11f97e90&s=matrix`
      );

      const data = await res.json();
      setMovie(data.Search);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <MovieContext.Provider value={{ movie, loading }}>
      {children}{" "}
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
