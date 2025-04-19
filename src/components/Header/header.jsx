import React, { useState, useEffect } from "react";
import "./header.css";
import farzihero from "../../assets/farzihero.jpeg";

const Header = () => {

  return (
    <div className="relative h-screen">
     <img src={farzihero} alt="" />
    </div>
  );
};

export default Header;
