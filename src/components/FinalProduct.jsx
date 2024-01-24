import React from "react";
import { FaStar } from "react-icons/fa";

function FinalProduct({ image }) {
  return (
    <div className="final-list">
      <div className="final-card">
        <img src={image} />
        <div className="mint">Refreshing Mint</div>
        <div className="currentPrice">30,000 MMK</div>
        <div className="prevPrice">30,000 MMK</div>
        <div className="points-stars">
          <FaStar className="star" />
          <span className="point">600 Points</span>
        </div>
      </div>
    </div>
  );
}

export default FinalProduct;
