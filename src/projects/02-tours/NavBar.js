import React from "react";

const NavBar = ({ openTours, openReviews }) => {
  return (
    <div className="nav-bar">
      <h5>Menu Items</h5>
      <p className="nav-item tour-nav-item" onClick={openTours}>
        Tour
      </p>
      <p className="nav-item reviews-nav-item" onClick={openReviews}>
        Reviews
      </p>
    </div>
  );
};

export default NavBar;
