import React from "react";
import "./Portfolio.css";

//imported assets

import icon1 from "/assets/map.png";
import icon2 from "/assets/hotel.png";
import icon3 from "/assets/reception.png";
import icon4 from "/assets/safety.png";
import icon5 from "/assets/destination.png";
import icon6 from "/assets/chat.png";


const Portfolio = () => {
  return (
    <div className="portfolio section container">
      <div className="secContainer">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why You Should Choose Us?</h3>
            <p data-aos="fade-up">
              We believe in crafting experiences that are as unique as you are.{" "}
              <strong>Beleive in Our Hospitality.</strong>
            </p>
          </div>

          <div className="mygrid">
            <div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon1} alt="safety icon" />
                </div>

                <div className="infor">
                  <h4>Prime Locations</h4>
                  <p>
                    Strategically located in Kathmandu, Pokhara, and other
                    popular tourist spots, ensuring easy access to major
                    attractions.
                  </p>
                </div>
              </div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon2} alt="destination icon" />
                </div>

                <div className="infor">
                  <h4>Diverse Accommodations</h4>
                  <p>
                    Choose from our array of thoughtfully designed rooms and
                    apartments, catering to solo travelers, families, and group
                    outings.
                  </p>
                </div>
              </div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon3} alt="online chat icon" />
                </div>

                <div className="infor">
                  <h4>Exquisite Services</h4>
                  <p>
                    Our dedicated team is committed to delivering exceptional
                    service, ensuring a delightful and seamless experience for
                    our guests.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon4} alt="safety icon" />
                </div>

                <div className="infor">
                  <h4>Safety and Support</h4>
                  <p>
                    Travel with peace of mind knowing that our dedicated support
                    team is available around the clock. Whether you encounter a
                    hiccup or simply need advice, we're just a call or message
                    away.
                  </p>
                </div>
              </div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon5} alt="destination icon" />
                </div>

                <div className="infor">
                  <h4>Diverse Range of Destinations</h4>
                  <p>
                    From bustling metropolises to tranquil retreats, our travel
                    portfolio spans the globe, encompassing a diverse range of
                    destinations to suit every traveler's taste and wanderlust.
                  </p>
                </div>
              </div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon6} alt="online chat icon" />
                </div>

                <div className="infor">
                  <h4>24/7 Customer Care</h4>
                  <p>
                    Stay connected, no matter where your adventure takes you.
                    Our dedicated online support ensures you have instant access
                    to assistance, recommendations, and local insights, ensuring
                    a seamless and enriching travel experience from start to
                    finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rightContent">
          <img src={image} alt="image" />
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
