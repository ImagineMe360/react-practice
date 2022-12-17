import React from "react";

const Card = (props) => {
  const { id, image, name, age } = props;
  return (
    <div className="card">
      <img src={image} className="image" />
      <article>
        <p className="name">{name}</p>
        <p className="age">{age} years</p>
      </article>
    </div>
  );
};

export default Card;
