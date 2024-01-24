import React from "react";
import { FaStar } from "react-icons/fa";

function ProductCard({ image, isBestDeal }) {
  return (
    <div className="product-list">
      <div className="product-card">
        <img src={image} />
        {isBestDeal && <div className="discount">25% Off</div>}
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

export default ProductCard;
