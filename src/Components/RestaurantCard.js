import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const restaurantData = resData?.info;
  const { name, avgRating, sla, cuisines, costForTwo, cloudinaryImageId } =
    restaurantData;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-100 ">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="break-words">{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-amber-950 text-amber-50 rounded-lg absolute">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
