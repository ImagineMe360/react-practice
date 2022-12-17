import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const getSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", getSize);
    // cleanup function
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", getSize);
    };
  });
  console.log("render");
  // window.onresize = () => {
  //   setSize(window.innerWidth);
  // };

  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
