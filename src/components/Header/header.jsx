import React, { useState, useEffect } from "react";
import "./header.css";
import farzihero from "../../assets/herohome.png";

const Header = () => {

  return (
    <div className="relative h-screen">
     <img src={farzihero} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default Header;
