import React from "react";
import "./Slide.css";
import Slider from "react-slick";
import { connect } from "react-redux";

function Slide({ images }) {
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
        {images.map((image, i) => {
          return (
            <div key={i} className="slider-pages">
              <img className="slider-img" src={image.url} alt={"img" + i} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

const mapStateToProps = ({ viewEvent }) => ({
  images: viewEvent.images
});

export default connect(mapStateToProps)(Slide);
