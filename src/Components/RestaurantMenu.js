// import { useState, useEffect } from "react";
// import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h2>Restaurant Menu</h2>
      <h3>{cuisines.join(", ")}</h3>
      {/* <h4>cost for two: Rs.{costForTwo / 100}</h4> */}
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} Rs.{" "}
            {item.card.info.price
              ? item.card.info.price
              : item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
