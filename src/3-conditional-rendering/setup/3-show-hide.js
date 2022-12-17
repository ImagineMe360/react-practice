import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("show");
  const showItem = () => {
    setShow(!show);
    if (text === "show") {
      setText("hide");
    } else {
      setText("show");
    }
  };
  return (
    <>
      <button className="btn" onClick={showItem}>
        {text}
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  // const checkSize = () => {
  //   setSize(window.innerWidth);
  // };
  useEffect(() => {
    window.onresize = () => {
      setSize(window.innerWidth);
    };
    // window.addEventListener("resize", checkSize);
    // return () => {
    //   window.removeEventListener("resize", checkSize);
    // };
  });

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>Size: {size} px</h2>
    </div>
  );
};

export default ShowHide;
