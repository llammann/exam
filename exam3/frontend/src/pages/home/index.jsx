import React from "react";
import Fade from "../../components/slider";
import Swipper from "../../components/Swipper";
import "./../../assets/style/Home.scss";
import about from "./../../assets/images/about-2.jpg";
function Home() {
  return (
    <>
      <Fade />
      <Swipper />
      <section className="ourChef">
        <div className="container">
          <div className="imgWrapper">
            <img src={about} alt="" />
          </div>
          <div className="right">
            <span>ABOUT TASTY</span>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quia
              impedit lamet consectetur adipisicing elit. Est quia impedit lamet
              consectetur adipisicing elit. Est quia impedit laudantium possimus
              autem.
            </p>
            <p className="second">
              Lorem ipsum dolor sit amet consectetamet consectetur adipisicing
              elit. Est quia impedit lamet consectetur adipisicing elit. Est
              quia impedit lur adipisicing elit. Voluptates minus quod labore?
            </p>
          </div>
        </div>
      </section>

      <section className="discover">
        <p>OUR MENU</p>
        <p>Discover Our exclusive Menu</p>

        <div className="options">
          <span>Main</span>
          <span>Dessert</span>
          <span>Drinks</span>
        </div>
      </section>
    </>
  );
}

export default Home;
