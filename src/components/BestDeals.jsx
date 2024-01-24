import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/ProductData";
import "./bestDeal.css";
import { RxDoubleArrowRight } from "react-icons/rx";

function BestDeals() {
  return (
    <div className="product-section">
      <h1>Best Deals</h1>
      <h3>Just For You</h3>
      <div className="best-deals">
        {productData.map((product) => (
          <ProductCard isBestDeal={true} key={product.id} image={product.url} />
        ))}
      </div>
      <div className="viewMore">
        <a href="#">
          <span className="view-more">
            View More
            <span className="chara">
              <RxDoubleArrowRight />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default BestDeals;
