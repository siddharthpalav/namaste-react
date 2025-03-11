import { createContext } from "react";

const UserContext = new createContext({
  loggedInUser: "Default User",
});

export default UserContext;
