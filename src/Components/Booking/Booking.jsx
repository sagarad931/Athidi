// import React  from 'react';
import React, { useState } from "react";

import "./Booking.css";

const Booking = () => {
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
    <> 
       <div className="sectionText">
        <div className="hotel_location">
          <form action="#">
            <div className="myflex">
              <div>
                <label className="label" htmlFor="location">
                  Location:
                </label>
                <select
                  className="select"
                  id="location"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option value="" disabled>
                    Pick a Location
                  </option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Butwal">Butwal</option>
                  <option value="Chitwan">Chitwan</option>
                </select>
              </div>
              <div>
                <label className="label" htmlFor="hotel">
                  Hotel:
                </label>
                <select
                  className="select"
                  id="hotel"
                  value={selectedHotel}
                  onChange={handleHotelChange}
                >
                  <option value="" disabled>
                    Select a Hotel
                  </option>
                  {selectedLocation === "Kathmandu" && (
                    <>
                      <option value="hotel1">Hotel 1</option>
                      <option value="hotel2">Hotel 2</option>
                    </>
                  )}
                  {selectedLocation === "Pokhara" && (
                    <>
                      <option value="hotel3">Hotel 3</option>
                      <option value="hotel4">Hotel 4</option>
                    </>
                  )}
                  {selectedLocation === "Butwal" && (
                    <option value="hotel5">Hotel 5</option>
                  )} 
                  {selectedLocation === "Chitwan" && (
                    <option value="hotel6">Hotel 6</option>
                  )}
                </select>
              </div>
            </div>
            <div className="book_btn">
              <button className="btn" type="submit">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Booking
