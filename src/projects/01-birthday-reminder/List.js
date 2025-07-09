import React, { useState } from "react";
import data from "./data";
import Card from "./Card";

const List = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h5 className="birthdays">{`You have ${people.length}  Birthdays Today`}</h5>
      <section className="list-container">
        {people.map((person) => {
          return <Card key={person.id} {...person} />;
        })}
      </section>
      <button className="clear-btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default List;
