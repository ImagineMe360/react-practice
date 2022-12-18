import React, { useState } from "react";

const NavIcon = ({ openNav }) => {
  // const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div className="nav-icon" onClick={openNav}>
      <article className="bar top-bar"></article>
      <article className="bar mid-bar"></article>
      <article className="bar bottom-bar"></article>
    </div>
  );
};

export default NavIcon;
