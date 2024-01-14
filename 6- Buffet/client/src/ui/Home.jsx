import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 my-6">
        En iyi pide
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Fırından çıktığı an sizinle
      </h2>
      <CreateUser />
    </div>
  );
}

export default Home;
