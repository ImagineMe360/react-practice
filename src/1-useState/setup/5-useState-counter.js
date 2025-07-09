import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decrease = () => {
    setValue(value - 1);
  };

  const increase = () => {
    setValue(value + 1);
  };

  const complexIncrease = () => {
    console.log(value);
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        console.log(value, prevState);
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decrease}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={increase}>
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>

        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
