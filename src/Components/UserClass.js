import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  componentDidMount() {}

  render() {
    const { name, Location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECTLY
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
            });
          }}>
          Count Increase
        </button>
        <h1>{count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {Location}</h3>
        <h4>Contact: siddharthapalav</h4>
      </div>
    );
  }
}

export default UserClass;
