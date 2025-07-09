import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("first text");

  const increase = () => {
    setValue(() => {
      // console.log("render component");
      return value + 1;
    });
    // console.log(value);
  };

  const changeText = () => {
    if (text === "first text") {
      setText("new text");
    } else {
      setText("first text");
    }
  };

  useEffect(() => {
    console.log("call use effect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("I depend on text");
  }, [text]);
  // console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <h1>{text}</h1>
      <button className="btn" onClick={increase}>
        Click
      </button>
      <button className="btn" onClick={changeText}>
        Change Text
      </button>
    </>
  );
};

export default UseEffectBasics;
