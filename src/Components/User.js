import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location } = props;
  return (
    <div className="user-card">
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Count Increase
      </button>
      <h1>{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: siddharthapalav</h4>
    </div>
  );
};

export default User;
