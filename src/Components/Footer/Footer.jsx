import React from "react";
import "./Footer.css";

//imported icons
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import logo from "/assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <img src={logo} alt="logo" />
            <strong data-aos="fade-down"></strong>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
            <BsLinkedin className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Travel</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="/">Destination</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Travel & Condition </a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+977-9802325942</span>
          <span className="email">info@athidihospitality.com</span>
        </div>
      </div>
      {/* <hr /> */}
      <p className="copyright"> Copyright ©2023 || All Right Reserved by Athidi Hospitality</p>
    </div>
  );
};

export default Footer;
