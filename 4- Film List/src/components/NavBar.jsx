function NavBar({ film, setFilm }) {
  return (
    <nav className="flex justify-around py-6 bg-blue-200">
      <div className="logo text-2xl"> 🎥 Film App</div>
      <input
        className="border border-blue-300 rounded-full bg-blue-100 focus:outline-none px-3 py-2"
        type="text"
        value={film}
        onChange={(e) => setFilm(e.target.value)}
      />
      <p className="text-2xl"> Result: X</p>
    </nav>
  );
}

export default NavBar;
