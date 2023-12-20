import axios from "axios";
import { useEffect, useState } from "react";

const [item, setItem] = useState();

export function getAllItem() {
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/items/").then((res) => {
      setItem(res.data.data);
    });
  }, [item]);
}
