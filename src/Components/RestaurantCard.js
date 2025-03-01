import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const restaurantData = resData?.info;
  const { name, avgRating, sla, cuisines, costForTwo, cloudinaryImageId } =
    restaurantData;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-100 ">
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
    </div>
  );
};

export default RestaurantCard;
