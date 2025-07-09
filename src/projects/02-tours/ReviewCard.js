import React from "react";

const ReviewCard = ({ id, name, job, image, text }) => {
  return (
    <div className="review-card">
      <section className="review-image-container">
        <div className="quote">
          <i className="fas fa-quote-right"></i>
        </div>
        <img className="review-image" src={image} alt={name} />
      </section>
      <h4 className="review-name">{name}</h4>
      <p className="review-job">{job}</p>
      <p className="review-text">{text}</p>
    </div>
  );
};

export default ReviewCard;
