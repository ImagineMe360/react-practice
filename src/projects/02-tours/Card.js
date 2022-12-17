import React, { useState } from "react";

const Card = (props) => {
  const { id, name, info, image, price, removeTour } = props;

  const [readMoreIsClosed, setReadMoreIsClosed] = useState(true);

  return (
    <div className="card">
      <img src={image} alt={name} className="tour-image" />
      <article className="name-and-price">
        <h4 className="tour-name">{name}</h4>
        <h4 className="tour-price">$ {price}</h4>
      </article>
      <p className="info">
        {readMoreIsClosed ? `${info.substring(0, 200)}...` : info}
        <button
          className="read-more-or-less"
          onClick={() => setReadMoreIsClosed(!readMoreIsClosed)}
        >
          {readMoreIsClosed ? "Read More" : "Show Less"}
        </button>
      </p>
      <button className="remove-tour" onClick={() => removeTour(id)}>
        Not Insterested
      </button>
    </div>
  );
};

export default Card;
