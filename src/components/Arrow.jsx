import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Arrow({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="left" onClick={prevSlide}>
        <FaArrowLeft />
      </span>
      <span className="right" onClick={nextSlide}>
        <FaArrowRight />
      </span>
    </div>
  );
}

export default Arrow;
