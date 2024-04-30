import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <MainHeader>
      <div className="flex items-center pl-20">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded" />
        <h1 className="font-bold ml-2 text-lg">
          <Link to="/">PaceDream</Link>
        </h1>
      </div>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
