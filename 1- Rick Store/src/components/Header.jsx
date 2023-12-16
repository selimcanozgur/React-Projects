function Header({ dataSize }) {
  return (
    <header>
      <img src="public/img/logo.png" className="w-[280px] m-auto mt-8" />
      <span className="absolute right-24 text-2xl text-slate-300 top-16 hidden lg:block">
        Products: {dataSize}
      </span>
    </header>
  );
}

export default Header;
