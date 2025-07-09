import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Text");
  const changeText = () => {
    if (text === "Random Text") {
      setText("New Title");
    } else {
      setText("Random Text");
    }
  };
  return (
    <div>
      <h2>{text}</h2>
      <button className="btn" onClick={changeText}>
        change text
      </button>
    </div>
  );
};

export default UseStateBasics;
