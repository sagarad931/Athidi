import React from "react";
import "./Reviews.css";

//imported icons
import { AiFillStar } from "react-icons/ai";

//imported images

import image1 from "/assets/image10.jpg";
import image2 from "/assets/image11.jpg";
import image3 from "/assets/image12.jpg";
import image4 from "/assets/image13.jpg";
import image5 from "/assets/image14.jpg";

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            I recently had the pleasure of booking a trip with Enchant Nepal and
            it was nothing short of exceptional. From the moment I inquired
            about their services to the end of my journey, every interaction was
            marked by professionalism, expertise, and a genuine passion for
            travel.
          </p>

          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={image1} alt="client image1" />
            <img src={image2} alt="client image2" />
            <img src={image3} alt="client image3" />
            <img src={image4} alt="client image4" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={image5} alt="Div Image" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
