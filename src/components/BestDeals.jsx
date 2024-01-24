import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/ProductData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./bestDeal.css";
import { RxDoubleArrowRight } from "react-icons/rx";

function BestDeals() {
  return (
    <div className="product-section">
      <h1>Best Deals</h1>
      <h3>Just For You</h3>
      <div className="best-deals">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
          {productData.map((product) => (
            <SwiperSlide>
              <ProductCard
                isBestDeal={true}
                key={product.id}
                image={product.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
