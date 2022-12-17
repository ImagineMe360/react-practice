import React from "react";

const Card = (props) => {
  const { image, name, age } = props;
  return (
    <div className="card">
      <img src={image} className="image" alt={name} />
      <article>
        <p className="name">{name}</p>
        <p className="age">{age} years</p>
      </article>
    </div>
  );
};

export default Card;
