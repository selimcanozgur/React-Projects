import { useState } from "react";

function CreateUser() {
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <input
        className="border-2 border-green-300 w-64 h-12 rounded-full focus:outline-none px-4 py-6 bg-slate-100"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
      />
      <div>
        {user.length > 0 && (
          <button className="bg-green-200 px-6 py-6 rounded-full font-semibold mt-8">
            Sipariş Ver
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
