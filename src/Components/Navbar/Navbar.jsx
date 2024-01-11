import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import logo from "/assets/logo.png";

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width on mount and on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 467); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showNavBar = () => {
    setNavBar("menu showNavBar");
  };

  const removeNavBar = () => {
    setNavBar("menu");
  };

  const redirectToHome = () => {
    window.location.href = "#"; // Replace "#" with your desired home page URL
  };

  return (
    <div className="navBar">
      <div
        className="logoDiv"
        onClick={redirectToHome}
        style={{ cursor: "pointer" }}
      >
        <a href="/">
        <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={navBar}>
        <ul>
          <a href="/"><li className="navList">Hotels</li></a>
          <a href="/"><li className="navList">About Us</li></a>
          <a href="/"><li className="navList">Testimonial</li></a>
          <a href="/"><li className="navList">Gallery</li></a>
          {/* <li className="navList"></li>
          <li className="navList"></li>
          <li className="navList"></li> */}
          {isMobile ? (
            <li className="navList">
             <button className="btn">Contact Us</button>

            </li>
          ) : null}
        </ul>
        {/* Icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>
      <div className="navbar_btn">
        <button className="btn flex">Book Now</button>
        {!isMobile && (
          <button className="btn flex">Contact Us</button>
        )}
      </div>
      {/* Icon to toggle navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;









