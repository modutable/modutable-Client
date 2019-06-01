import React, { useState } from "react";
import "../../style/Slide.css";
import Slider from "react-slick";

export default function Slide() {
  const a = require("../../img/1.jpeg");
  const b = require("../../img/2.jpeg");
  const c = require("../../img/3.jpeg");
  const d = require("../../img/4.jpeg");

  const [images, setImagaes] = useState([]);
  const [image, setImage] = useState(images[0]);

  const array = [a, b, c, d];

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  var settings = {
    dots: true,
    focusOnSelect: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };

  return (
    <div className="slider-box">
      <Slider {...settings}>
        {array.map((image, i) => {
          console.log(image);
          return (
            <div key={i} className="slider-pages">
              <img className="slider-img" src={image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
