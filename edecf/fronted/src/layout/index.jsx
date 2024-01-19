import React from "react";
import "./../assets/style/Navbar.scss";

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import PositionedMenu from "../components/Menu";
function Navbar() {
  const basket = useSelector((state) => state.product.basket);
  const wishlist = useSelector((state) => state.product.wishlist);

  return (
    <>
      <section className="contactHeader">
        <div className="container">
          <div className="left">
            <span className="faceBook">
              <FaFacebook style={{ color: "white" }} />
            </span>
            <span className="twitter">
              <FaTwitter style={{ color: "white" }} />
            </span>
            <span className="instagram">
              <FaInstagram style={{ color: "white", fontsize: "2px" }} />
            </span>
            <span className="linkedn">
              <FaLinkedin style={{ color: "white" }} />
            </span>
          </div>

          <div className="right">
            <span className="phoneNumber">
              <span className="phone">
                <FaPhone style={{ color: "orange" }} />
              </span>
              <span className="phoneNumber">(+1) 234 5678 9101</span>
            </span>

            <span className="emailContact">
              <span className="emailIcon">
                <MdEmail style={{ color: "orange" }} />
              </span>
              <span className="email">shop@yourdomain.comspan</span>
            </span>
          </div>
        </div>
      </section>

      <nav>
        <div className="container">
          <div className="left">
            <span className="logo">
              <span>Selling</span>
              <span>.</span>
            </span>
          </div>

          <div className="right">
            <div className="menu">
              <PositionedMenu />
            </div>
            <ul className="pages">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
              <li>
                <Link to="/basket">
                  <FaBasketShopping />
                </Link>
                <sup>{basket.length}</sup>
              </li>
              <li>
                <Link to="/wishlist">
                  <GoHeartFill />
                </Link>
                <sup>{wishlist.length}</sup>
              </li>
              {/* <li>
                <Link to="/:id">Detail</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
