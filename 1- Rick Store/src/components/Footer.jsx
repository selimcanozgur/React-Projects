function Footer() {
  const open = 12;
  const close = 21;
  const time = new Date().getHours();

  return (
    <>
      <hr />
      <footer className="text-slate-300 text-center my-6 font-semibold itemDescription mb-12">
        {time >= open && time <= close
          ? "We're open from 12:00 to 22:00 🟢"
          : "It is closed now 🔴"}
      </footer>
    </>
  );
}

export default Footer;
