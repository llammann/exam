import React, { Component } from "react";
import Slider from "react-slick";
import blue from "./../assets/images/blue.jpg";
import orange from "./../assets/images/orange.jpg";
import red from "./../assets/images/red.jpg";
import "./../assets/style/Slider.scss";
import grey from "./../assets/images/grey.jpg";
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
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src={blue} />
          </div>
          <div>
            <img src={orange} />
          </div>
          <div>
            <img src={red} />
          </div>
          <div>
            <img src={grey} />
          </div>
        </Slider>
      </div>
    );
  }
}
