import React from "react";
import { Link } from "react-router-dom";
import "./../../assets/style/Navbar.scss";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <span>Tasty</span>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
