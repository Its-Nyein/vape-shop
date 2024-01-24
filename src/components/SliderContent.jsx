import React from "react";

function SliderContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={activeIndex === index ? "slides active" : "inactive"}
        >
          <img src={slide.urls} className="slide-image" />
          <h2 className="slide-title">The Best Look</h2>
          <h3 className="slide-text">Anytime Anywhere</h3>
          <span className="price">Starts from 10,000 MMK</span>
          <a href="#" className="view-link">
            <span className="view">View</span>
          </a>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
