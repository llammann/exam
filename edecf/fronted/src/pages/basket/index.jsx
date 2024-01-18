import React from "react";
import "./../../assets/style/Basket.scss";
import model from "./../../assets/images/model.jpg";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
    handleWishlist,
    handleMinus,
    handlePlus,
    handleDelete
  } from "../../redux/slices/ProductSlice";
function Basket() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.basket);
  const wishlist = useSelector((state) => state.product.wishlist);
  console.log("basketdeki data", data);

  return (
    <>
      <section className="header">
        <h1>Basket</h1>
      </section>
      <section className="basket">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data &&
                data.map((prod) => {
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
                            <button
                              onClick={() => {
                                dispatch(handleMinus());
                              }}
                            >
                              -
                            </button>
                            <span>{prod.count}</span>
                            <button
                              onClick={() => {
                                dispatch(handlePlus());
                              }}
                            >
                              +
                            </button>
                            <button
                              onClick={() => {
                                dispatch(handleMinus());
                              }}
                            >
                              delete
                            </button>
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

export default Basket;
