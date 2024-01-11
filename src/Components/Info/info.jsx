import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";

import './info.css';

const Info = () => {
  return (
    <>
      <div className="info">
        <hr /> 
        <h1 className="title">Athidi Hospality</h1>
        <p className="desc">
          Hotels and Apartments In Kathmandu, Lalitpur, Bhaktapur, Pokhara, and
          all over Nepal.  
        </p>
        <div className="items">
          <span> <FaPhone size={20} className="blue-icon"/> +977-9802325942 </span>
          <span> <FaPhone size={20} className="blue-icon" /> +977-9802325941  </span>
          <span> <FaMailBulk size={20} className="blue-icon" /> info@athidihospitality.com</span>
          <span><FaSearchLocation size={20} className="blue-icon" /> Thamelmarg, Kathmandu</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Info;
