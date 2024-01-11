import React, { useState } from "react";
import "./Destinations.css";
import "../Booking/Booking.css";
import { TiLocation } from "react-icons/ti";

import "./Carousel.css";
import Carousel from "./Carousel"; 
import Booking from "../Booking/Booking";

import { ChevronLeftCircle } from "lucide-react";
import { ChevronRightCircle } from "lucide-react";

import image1 from "/assets/image1.jpg";
import image2 from "/assets/image2.jpg";
import image3 from "/assets/image3.jpg";
import image4 from "/assets/image4.jpg";
import image5 from "/assets/image5.jpg";
import image6 from "/assets/image6.jpg";
// import image7 from "/assets/image7.jpg";
// import image8 from "/assets/image8.jpg";

import img1 from "/assets/carousel/svg/1.svg";
import img2 from "/assets/carousel/svg/2.svg";
import img3 from "/assets/carousel/svg/3.svg";
import img4 from "/assets/carousel/svg/4.svg";
import img5 from "/assets/carousel/svg/5.svg";
import img6 from "/assets/carousel/svg/6.svg";
import img7 from "/assets/carousel/svg/7.svg";
import img8 from "/assets/carousel/svg/8.svg";
import img9 from "/assets/carousel/svg/9.svg";
import img10 from "/assets/carousel/svg/10.svg";
import img11 from "/assets/carousel/svg/11.svg";
import img12 from "/assets/carousel/svg/12.svg";
import img13 from "/assets/carousel/svg/13.svg";
import img14 from "/assets/carousel/svg/14.svg";
import img15 from "/assets/carousel/svg/15.svg";
import img16 from "/assets/carousel/svg/16.svg";
import img17 from "/assets/carousel/svg/17.svg";
import img18 from "/assets/carousel/svg/18.svg";
import img19 from "/assets/carousel/svg/19.svg";
import img20 from "/assets/carousel/svg/20.svg";
import img21 from "/assets/carousel/svg/21.svg";
import img22 from "/assets/carousel/svg/22.svg";
import img23 from "/assets/carousel/svg/23.svg";
import img24 from "/assets/carousel/svg/24.svg";
import img25 from "/assets/carousel/svg/25.svg";
import img26 from "/assets/carousel/svg/26.svg";
import img27 from "/assets/carousel/svg/27.svg";
import img28 from "/assets/carousel/svg/28.svg";
import img29 from "/assets/carousel/svg/29.svg";
import img30 from "/assets/carousel/svg/30.svg";
import img31 from "/assets/carousel/svg/31.svg";
import img32 from "/assets/carousel/svg/32.svg";
import img33 from "/assets/carousel/svg/33.svg";
import img34 from "/assets/carousel/svg/34.svg";
import img35 from "/assets/carousel/svg/35.svg";
import img36 from "/assets/carousel/svg/36.svg";
import img37 from "/assets/carousel/svg/37.svg";
import img38 from "/assets/carousel/svg/38.svg";



const destinations = [
  {
    id: 1,
    img: image1,
    desc: "Kathmandu, nestled in Nepal, is a cultural gem. Ancient temples, bustling markets, and a lively ambiance define this vibrant metropolis. It's a sensory delight for history enthusiasts, offering a captivating glimpse into its rich heritage.",
  },
  {
    id: 2,
    img: image2,

    desc: "Patan, also Lalitpur, is a living testament to Newar culture. Its intricate temples, grand palaces, and lively squares showcase a glorious past and artistic excellence. This ancient city stands as a proud museum of Newar architecture.",
  },
  {
    id: 3,
    img: image3,

    desc: "Pokhara, framed by the Annapurna range, is a haven for nature lovers. Tranquil lakes, verdant forests, and Himalayan vistas create a perfect blend of adventure and relaxation. It's a serene oasis against the stunning backdrop of nature's grandeur.",
  },
  {
    id: 4,
    img: image4,

    desc: "The Himalayas, Earth's loftiest peaks, present an unrivaled natural spectacle. Towering summits, including Mount Everest, vast glaciers, and idyllic valleys form a breathtaking panorama. Generations of mountaineers, trekkers, and nature enthusiasts have been captivated by this awe-inspiring range.",
  },
  {
    id: 5,
    img: image5,

    desc: "Ghandruk, nestled in the Annapurna region, is a postcard-perfect village. Traditional Gurung architecture and awe-inspiring mountain vistas define this destination. Its terraced fields, warm hospitality, and popular trekking routes make it a favored spot for hikers seeking culture and natural beauty.",
  },
  {
    id: 6,
    img: image6,

    desc: "Namche Bazaar, perched in the Everest region, is the lively heart of Khumbu Valley. Surrounded by towering peaks, it's a pivotal stop for trekkers en route to Everest Base Camp. This hub offers a blend of Sherpa culture, modern conveniences, and breathtaking views.",
  },
  // {
  //   id: 7,
  //   img: image7,
  //   name: "Base Camp",
  //   location: "Nepal",
  //   rating: 4.3,
  // },
  // {
  //   id: 8,
  //   img: image8,
  //   name: "Bhaktapur Durbar Square",
  //   location: "Nepal",
  //   rating: 4.4,
  // },
];

const Destinations = () => {
  // const allImages = [image1, image2, image3, image4, image5, image6, image7, image8];
  const allcarsouleimages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
  ];

  return (
    <div className="destination section container">
      <Booking />

      <div className="Booking_Partner">
        <h2>Our Booking Partners</h2>
        <div className="partner_img">
          <a href="#">
            <span>
              {" "}
              <img src="/assets/partners/image15.png" alt="" />
            </span>
          </a>
          <a href="#">
            <span>
              {" "}
              <img src="/assets/partners/image16.png" alt="" />
            </span>
          </a>
          <a href="#">
            <span>
              {" "}
              <img src="/assets/partners/image17.png" alt="" />
            </span>
          </a>
          <a href="#">
            <span>
              {" "}
              <img src="/assets/partners/image18.png" alt="" />
            </span>
          </a>
        </div>
      </div>

      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">EXPLORE NOW</span>
          <h3>Our Hotels and Apartments</h3>
          <p className="secDesc">
            Choose from Athidi Hospitality which are spread across key regions
            of Nepal including Kathmandu, Lalitpur, Bhaktapur, Pokhara and other
            places of Nepal. Enjoy a splendid stay at Athidi Hospitality.{" "}
          </p>
        </div>

        <div className="sider">
          <div className="myarrow">
            <Carousel className="myimg" images={allcarsouleimages} />
          </div>
        </div>

        <div className="carouseldesc">
          <h5>Featuring lavish rooms, apartments, dining establishments, and elegantly adorned event venues and spaces, each of our hotels in Nepal caters to both corporate and leisure travelers alike. Reserve your stay at Athidi Hospitality and indulge in a vacation experience that is truly unparalleled."</h5>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Hotels</li>
            <li>Apartments</li>
            <li>Tourists Destinations</li>
            <li>Trek</li>
          </ul>
        </div>

        

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv">
                  <img src={destination.img} alt="Destination Image" />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                  </div>
                </div>
                <span className="rating">{destination.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
