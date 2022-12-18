import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import data from "./data";

const Reviews = () => {
  const [num, setNum] = useState(0);

  const prevReview = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(data.length - 1);
    }
  };

  const nextReview = () => {
    if (num < data.length - 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  };

  const getRandomReview = () => {
    let random = Math.floor(Math.random() * data.length);
    setNum(random);
  };

  return (
    <div className="reviews-container">
      {/* {data.map((person) => {
        return <ReviewCard key={person.id} {...person} />;
      })} */}
      <ReviewCard
        name={data[num].name}
        image={data[num].image}
        job={data[num].job}
        text={data[num].text}
      />
      <section className="card-actions">
        <article className="next-and-prev">
          <div className="prev-icon" onClick={prevReview}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="next-icon" onClick={nextReview}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </article>
        <button onClick={getRandomReview}>Surprise Me</button>
      </section>
    </div>
  );
};

export default Reviews;
