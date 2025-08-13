// Import React modules
import React from "react";

const Profile = (props) => {
  const { name, hobby } = props.profile;
  console.log(props);
  return (
    <div>
      <h3>My name is {name}</h3>
      <p>My hobby is {hobby}</p>
    </div>
  );
};

export default Profile;