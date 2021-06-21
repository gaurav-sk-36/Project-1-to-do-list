import React from "react";

import "./card.css";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.color,
        borderRadius: props.borderRadius,
        marginTop: props.marginTop,
        width: props.width,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
