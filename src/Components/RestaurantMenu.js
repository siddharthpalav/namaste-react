// import { useState, useEffect } from "react";
// import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurantMenu(resid);

  const [showItems, setShowItems] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo.cards[2]?.card?.card?.info;

  // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
  // type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategor

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-lg">{name}</h1>
      <p className="font-bold">{cuisines.join(", ")}</p>

      {/* Category Accordians */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showItems}
          setShowItems={() => setShowItems(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
