import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { Box, Typography, RadioGroup, FormControlLabel, FormGroup, Radio, Button, Switch } from "@mui/material";
import {Link} from "react-router-dom"

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
    <Slider className="carousel_container sec_carol" {...settings}>
      {images.map((image, index) => (
        <div key={index}>
            <div className="carousel_info">
                <h>{image.brand} {image.model}</h>
                <p>{image.year}</p>
                <Link to="/detalle"><Button sx={{color:"white",backgroundColor:"#323f83"}}>Conocela</Button></Link>
            </div>
          <img className="carousel_img" src={image.url} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
