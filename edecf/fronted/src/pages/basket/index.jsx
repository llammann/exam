import React from "react";
import "./../../assets/style/Basket.scss";
import model from "./../../assets/images/model.jpg";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  handleWishlist,
  handleMinus,
  handlePlus,
  handleDelete,
} from "../../redux/slices/ProductSlice";
function Basket() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.basket);
  const wishlist = useSelector((state) => state.product.wishlist);
  console.log("basketdeki data", data);

  let total=0;
  data.forEach((bas) => {
    total += +bas.price * bas.count;
    console.log("bas",bas.price * bas.count)
  });
  console.log("totall", total);

  return (
    <>
      <section className="headerr">
        <div className="container">
          <h1>Basket</h1>
        </div>
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
                          <div className="prices">
                            <span className="price">Price: {prod.price}$</span>
                            <p>Total: {prod.price * prod.count}$</p>
                          </div>
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

                            <div
                              className="like"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <button>
                                <FaStar className="icon" />
                              </button>
                              <span>29</span>
                            </div>
                          </div>

                          <p>{prod.description}</p>

                          <div className="buttons">
                            <Button
                              variant="outlined"
                              color="success"
                              onClick={() => {
                                dispatch(handleMinus(prod));
                              }}
                            >
                              -
                            </Button>

                            <span className="count">{prod.count}</span>

                            <Button
                              variant="outlined"
                              color="success"
                              onClick={() => {
                                dispatch(handlePlus(prod));
                              }}
                            >
                              +
                            </Button>
                            <br />
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => {
                                dispatch(handleDelete(prod));
                              }}
                            >
                              delete
                            </Button>
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
      <section className="total">
        <div className="container">
          <h1>Total:{total}$</h1>
        </div>
      </section>
    </>
  );
}

export default Basket;
