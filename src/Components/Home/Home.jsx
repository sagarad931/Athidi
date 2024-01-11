import React, { useState } from "react";
import "./Home.css";

//imported assets
import banner from "/assets/banner.svg";
// import image1 from "/assets/image15.jpg";
// import image2 from "/assets/image16.jpg";
// import image3 from "/assets/image17.jpg";
// import image4 from "/assets/image18.jpg";

//imported icons
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  // State to track selected location and hotels
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");

  // Function to handle location selection
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);

    // Reset selected hotel when location changes
    setSelectedHotel("");
  };

  // Function to handle hotel selection
  const handleHotelChange = (event) => {
    const hotel = event.target.value;
    setSelectedHotel(hotel);
  };

  return (
    <div className="Home">
      <div className="bannerBg">
        <img src={banner} alt="banner image" />
      </div>
    
    </div>
  );
};

export default Home;


