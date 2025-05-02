import React, { useState, useEffect } from "react";
import "./header.css";
import farzihero from "../../assets/herofarzi2.jpg";
import farzitext from '../../assets/about1.svg'

const Header = () => {

  return (
    <div className="relative h-screen">
     <img src={farzihero} alt="" className="w-full h-full object-cover "
      // style={{marginTop:"100px"}}
      />
    </div>
  );
};

export default Header;
