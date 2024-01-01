function Buttons({ children, onClick }) {
  return (
    <button
      className="bg-orange-400 rounded-2xl p-2 font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Buttons;
