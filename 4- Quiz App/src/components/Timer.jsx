import { useEffect } from "react";

function Timer({ time, dispatch }) {
  const mins = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    // Bunu kullanma sebebimiz testi yeninden başlattığımızda zamanın daha hızlı akıyor olması bunu engellemek için clearInterval kullanarak zamanlayıcıyı durdurduk
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="flex justify-center mb-6 text-slate-200">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
