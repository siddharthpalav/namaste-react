import { RES_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL + resid);
    const json = await data.json();
    setResInfo(json.data);
  };

  console.log("resInfo => ", resInfo);

  return resInfo;
};

export default useRestaurantMenu;
