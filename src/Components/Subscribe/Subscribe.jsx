import React from "react";
import "./Subscribe.css";

//import images
import image from "/assets/image10.png";

const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image} alt="Div Image" />

        <div className="textDiv">
          <h4>Best way to Start your Journey! </h4>

          <p>
            We offer a range of accommodation options, from comfortable hotels
            to boutique guesthouses and unique lodgings, depending on the
            destination and tour package.
            <br />
            Specific details will be provided in the tour itinerary.
          </p>
          <button className="btn"> Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
