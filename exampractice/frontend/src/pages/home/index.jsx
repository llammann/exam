import React from "react";
import { useEffect } from "react";
import "./../../assets/style/Home.scss";
import Swiper from "./../../components/Swiper";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Hen from "./../../assets/images/dish-7.jpg";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllFood,
  handleWishlist,
  handleBasket,
} from "../../redux/slices/FoodSlice";
function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food.data);

  useEffect(() => {
    dispatch(getAllFood());
  }, []);

  console.log("data", data);
  return (
    <>
      <Swiper />

      <section className="foods">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data &&
                data.map((food) => {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={food._id}>
                      <div className="one">
                        <div className="left">
                          <div className="imageWrapper">
                            <img src={Hen} alt="" />
                          </div>
                          <div className="details">
                            <h1>{food.name}</h1>
                            <p>{food.ingredients}</p>
                          </div>
                        </div>

                        <div className="right">
                          <h1>{food.price}$</h1>
                          <button
                            onClick={() => {
                              handleBasket(food);
                              console.log("added basket")
                            }}
                          >
                            bas
                          </button>
                          <button
                            onClick={() => {
                              dispatch(handleWishlist(food._id));
                              console.log(" added wishlist");
                            }}
                          >
                            wish
                          </button>
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

export default Home;
