"use client";

import React, { useState } from "react";
import NavbarMobile from "./navbar-mobile";
import Navbar from "./navbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={handleShowNav} />
      <NavbarMobile showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNavbar;
