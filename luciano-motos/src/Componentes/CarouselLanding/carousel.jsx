import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {
      autoplay: true,
      autoplaySpeed: 30000,
      pauseOnHover: true,
    }
  };

  return (
    <Slider className="carousel_container" {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img className="carousel_img" src={image.url} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
