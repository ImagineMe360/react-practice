import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../02-tours/App.css";
import Loading from "./Loading";

let count = 0;

const url = "https://course-api.com/react-tours-project";

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getTours = async () => {
    setIsLoading(true);
    const data = await (await fetch(url)).json();
    setTours(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length < 1) {
    return (
      <div className="no-tour-list-container">
        <h3>No Tour on the List</h3>
        <button onClick={() => getTours()}>Get Tours</button>
      </div>
    );
  }

  return (
    <div className="tour-list-container">
      {tours.map((tour) => {
        return <Card key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default TourList;
