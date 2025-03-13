import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useRouteError } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("header rendered");

  console.log(useRouteError());

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems => ", cartItems);

  // If no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called on initial render(just once)
  // If dependency array is [btnNameReact] => called everytime btnNameReact is updated
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>
          <li className="mx-2 px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
