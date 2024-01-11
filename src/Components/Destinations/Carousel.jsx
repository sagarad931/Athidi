import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="carousel">
      <div className="carousel-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial="hidden"
            animate="hidden"
            exit="hidden"
          />
          
        </AnimatePresence>
        <div className="slide_direction">
          <motion.div
            className="left"
            onClick={handlePrevious}
          >
            {/* Your left arrow SVG here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              viewBox="0 96 960 960"
              width="35"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            className="right"
            onClick={handleNext}
          >
            {/* Your right arrow SVG here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              viewBox="0 96 960 960"
              width="35"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => handleDotClick(index)}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
