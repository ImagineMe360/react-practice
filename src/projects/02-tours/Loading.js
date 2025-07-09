import React from "react";
import loading from "./spinner.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} />
      <h3 style={{ fontStyle: "italic" }}>Loading your tour list...</h3>
    </div>
  );
};

export default Loading;
