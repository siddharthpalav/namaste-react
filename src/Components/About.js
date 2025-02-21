import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>This is Namaste React WebSeries</h1>
        <User name="First Child" Location="Mumbai" />
        <UserClass name="Second Child" Location="Mumbai" />
      </div>
    );
  }
}

/*
Mounting Phase
- Parent constructor called
- Parent render called

  - Mounting Phase
  - First Child Child constructor called 
  - First Child Child render called

    - Mounting Phase
    - First Child Inner Child constructor called
    - First Child Inner Child render called
    
  - Second Child Child constructor called
  - Second Child Child render called

    - Second Child Inner Child constructor called
    - Second Child Inner Child render called 
    
    <DOM UPDATED - IN SINGLE BATCH>
    - Commit Phase
    - First Child Inner Component Did Mount
  - First Child Child Component Did Mount
    - Second Child Inner Component Did Mount
  - Second Child Child Component Did Mount

- Commit Phase
- Parent Component Did Mount

 */

// const About = () => {
//   return (
//     <div>
//       <h1>This is Namaste React WebSeries</h1>
//       <User name="function(sid)" location="Mumbai" />
//       <UserClass name="classBased(sid)" location="Mumbai" />
//     </div>
//   );
// };

export default About;
