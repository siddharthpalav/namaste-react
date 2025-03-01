import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FOOD_URL } from "../utils/constants";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  let onlineStatus;
  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_URL);
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.17265889601803&lng=72.96592053025961&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!, Please check your internet connection;
      </h1>
    );

  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  console.log(filteredRestaurant);

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              // setListOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
