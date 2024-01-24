import React from "react";
import "./released.css";
import ReleasedCard from "./ReleasedCard";
import ReleasedCard2 from "./ReleasedCard2";

function Released() {
  return (
    <section className="released-section">
      <h1>
        New <span>Released</span>
      </h1>
      <h3>Try Our Latest Flavors Here</h3>
      <div className="released">
        <ReleasedCard />
        <ReleasedCard />
        <ReleasedCard2 />
        <ReleasedCard2 />
      </div>
    </section>
  );
}

export default Released;
