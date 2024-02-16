import { FaRegStar } from "react-icons/fa";

function Stars() {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
        <FaRegStar />
      ))}
    </div>
  );
}

export default Stars;
