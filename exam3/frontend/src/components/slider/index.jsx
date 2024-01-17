import React, { Component } from "react";
import Slider from "react-slick";
import red from "./../../assets/images/bg_2.jpg";
import blue from "./../../assets/images/bg_1.jpg";
import brown from "./../../assets/images/bg_3.jpg";
import "./../../assets/style/Slider.scss";
export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="main">
        <Slider {...settings} className="slider">
          <div className="first">
            <div className="container">
              <h1>Lorem ipsum dolor sit, amet.</h1>
              <button>Book a table</button>
            </div>
          </div>
          <div className="second">
            <div className="container">
              <h1>Lorem ipsum dolor s amet. amet. amet. amet.it, amet.</h1>
              <button>Book a table</button>
            </div>
          </div>
          <div className="third">
            <div className="container">
              <h1>Lorem ipsum dolor sit, amet. amet. amet.</h1>
              <button>Book a table</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
