import React from "react";
import "./../../assets/style/Wishlist.scss";
import model from "./../../assets/images/model.jpg";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useSelector, useDispatch } from "react-redux";
import {
  handleWishlist,
  handleBasket,
  deleteWish,
} from "../../redux/slices/ProductSlice";
function Wishlist() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.basket);
  const wishlist = useSelector((state) => state.product.wishlist);
  return (
    <>
      <section className="headerr">
        <div className="container">
          <h1>Wishlist</h1>
        </div>
      </section>

      <section className="wishlist">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {wishlist &&
                wishlist.map((prod) => {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={prod._id}>
                      <div className="card">
                        <div className="imgWrapper">
                          <img src={model} alt="" />
                        </div>
                        <div className="details">
                          <span className="name">{prod.name}</span>

                          <div className="likeStars">
                            <div className="star">
                              <button
                                onClick={() => {
                                  dispatch(handleWishlist(prod));
                                  dispatch(deleteWish(prod));
                                }}
                              >
                                {wishlist.find(
                                  (wish) => wish._id == prod._id
                                ) ? (
                                  <GoHeartFill className="icon" />
                                ) : (
                                  <GoHeart className="icon" />
                                )}
                              </button>
                              <span>5.0</span>
                            </div>

                            <div className="like">
                              <button>
                                <FaStar className="icon" />
                              </button>
                              <span>29</span>
                            </div>
                          </div>

                          <p>{prod.description}</p>

                          <div className="buttons">
                            <button
                              onClick={() => {
                                dispatch(handleBasket(prod)),
                                  console.log("basket ind", basket);
                              }}
                            >
                              CART
                            </button>
                            <button>VIEW</button>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </div>
      </section>
    </>
  );
}

export default Wishlist;
