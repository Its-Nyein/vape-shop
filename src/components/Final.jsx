import React from "react";
import "./final.css";
import productData from "../data/ProductData";
import FinalProduct from "./FinalProduct";

function Final() {
  return (
    <section
      className="final-section"
      style={{
        backgroundImage: `url("https://www.planetofthevapes.com/cdn/shop/files/Frame_39_1_1184x384_crop_center.jpg?v=1693540609")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="final-title">Devices</h1>
      <h3 className="final-sub">Find the best for you here!</h3>
      <div className="final-deals">
        {productData.map((product) => (
          <FinalProduct key={product.id} image={product.url} />
        ))}
      </div>
    </section>
  );
}

export default Final;
