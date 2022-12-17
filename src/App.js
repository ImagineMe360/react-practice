import React from "react";
// import Final from "./3-conditional-rendering/final/3-show-hide";
// import Setup from "./3-conditional-rendering/setup/3-show-hide";
import TourList from "./projects/02-tours/TourList";

function App() {
  return (
    <div className="container">
      <section className="head">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </section>
      <TourList />
    </div>
  );
}

export default App;
