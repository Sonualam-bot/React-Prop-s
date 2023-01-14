import React from "react";
import Card from "./Card";

function Avatar(props) {
  return (
    <div>
      <img className="circle-img" src={props.img} alt="avatar_img" />
    </div>
  );
}

export default Avatar;
