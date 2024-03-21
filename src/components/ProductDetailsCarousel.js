import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({images}) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          {images &&
            images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`carousel-${index}`}
                />
              </div>
            ))}
        </Carousel>
      </div>
    );
};

export default ProductDetailsCarousel;