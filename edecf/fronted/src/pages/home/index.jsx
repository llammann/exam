import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./../../assets/style/Home.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import model from "./../../assets/images/model.jpg";
import about from "./../../assets/images/about.jpg";
import person from "./../../assets/images/person_2.jpg";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  handleWishlist,
  handleBasket,
} from "../../redux/slices/ProductSlice";

import { Helmet } from "react-helmet";

function HomePage() {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.product.wishlist);
  const basket = useSelector((state) => state.product.basket);
  console.log("homedaki basket", basket);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const data = useSelector((state) => state.product.data);
  // console.log("dataa", data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="ShopWithUs">
        <div className="container">
          <h1>Shop With Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam sed ullam nisi repellendus dolorum numquam, hic
            excepturi.
          </p>
          <div className="buttons">
            <button>SHOP NOW</button>
            <button>CLUB MEMBERSHIP</button>
          </div>
        </div>
      </section>

      <section className="ourProducts">
        <div className="container">
          <div className="header">
            <span>POPULAR PRODUCTS</span>
            <h1>Our Products</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum sint dolores quod sunt maxime. Tenetur veniam et est
              eveniet minus?
            </p>
          </div>

          <div className="products">
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
                              <Link to={"/" + prod._id}>
                                <button
                                  onClick={() => {
                                    // dispatch(handleView(prod._id));
                                    console.log("detail");
                                    // navigate("/" + prod._id);
                                    // <Link to={"/" + prod._id} />;
                                  }}
                                >
                                  VIEW
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </div>
        </div>
      </section>

      <section className="getUpdates">
        <div className="container">
          <span>Get notified on each updates</span>
          <div className="inputButton">
            <input type="text" placeholder="Enter your email addres" />
            <button>SUBSCRIBE</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            saepe consequuntur tempore. Dolor dolores aspernatur error rerum
            adipisci vel harum!
          </p>
        </div>
      </section>

      <section className="featuredProducts">
        <div className="container">
          <div className="header">
            <span>AWESOME PRODUCTS</span>
            <h1>Featured Products</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              culpa libero iure asperiores officiis debitis corporis praesentium
              consequatur iste neque possimus.
            </p>
          </div>

          <div className="firstDetailedPro">
            <div className="imgWrapper">
              <img src={model} alt="" />
            </div>

            <div className="right">
              <h1>About This Product</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                rerum! Nobis, eveniet reiciendis eos autem voluptatibus nulla
                optio voluptates! Sed facilis perspiciatis quod officia repellat
                impedit corrupti, nam ratione quidem mollitia unde soluta
                pariatur quaerat tempora est aut voluptatem.
              </p>

              <p className="second">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                facere accusamus, possimus.
              </p>

              <span>Price :</span>
              <p>
                <del>$269.0</del>
                <span>$69.00</span>
              </p>

              <div className="buttons">
                <button>VIEW DETAILS</button>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>

          <div className="secondDetailedPro">
            <div className="right">
              <h1>About This Product</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                rerum! Nobis, eveniet reiciendis eos autem voluptatibus nulla
                optio voluptates! Sed facilis perspiciatis quod officia repellat
                impedit corrupti, nam ratione quidem mollitia unde soluta
                pariatur quaerat tempora est aut voluptatem.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                facere accusamus, possimus.
              </p>

              <span>Price :</span>
              <p>
                <del>$269.0</del>
                <span>$69.00</span>
              </p>

              <div className="buttons">
                <button>VIEW DETAILS</button>
                <button>ADD TO CART</button>
              </div>
            </div>

            <div className="imgWrapper">
              <img src={model} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="aboutUs">
        <div className="container">
          <div className="about">
            <div className="imgWrapper">
              <img src={about} alt="" />
            </div>

            <div className="right">
              <span>MERCHANT COMPANY</span>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                itaque culpa cupiditate quos debitis deserunt aut, reprehenderit
                dolores! Quod, dolor laboriosam. Itaque qui labore corrupti
                magnam dolore at aperiam. Cumque praesentium at provident
                exercitationem expedita autem doloribus? Ducimus, consectetur.
              </p>
              <button>LEARN MORE</button>
            </div>

            <div className="news">
              <h1>Truested Merchant</h1>
            </div>
          </div>

          <div className="leaderShip">
            <span>TEAM</span>
            <p className="head">Leadership</p>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <div className="card">
                  <div className="imgWrapper">
                    <img src={person} alt="" />
                  </div>
                  <div className="details">
                    <span className="name">James Young</span>
                    <p>MARKETING</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quas neque molestias itaque quam aperiam eligendi! Nam
                      architecto saepe nesciunt! Dolorem illo laborum, beatae
                      officia amet illum doloribus.
                    </p>
                    <div className="contacts">
                      <span className="facebook">
                        <FaFacebook style={{ color: "white" }} />
                      </span>
                      <span className="twitter">
                        <FaTwitter style={{ color: "white" }} />
                      </span>
                      <span className="linkedn">
                        <FaLinkedin style={{ color: "white" }} />
                      </span>
                      <span className="instagram">
                        <FaInstagram style={{ color: "white" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <div className="card">
                  <div className="imgWrapper">
                    <img src={person} alt="" />
                  </div>
                  <div className="details">
                    <span className="name">James Young</span>
                    <p>MARKETING</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quas neque molestias itaque quam aperiam eligendi! Nam
                      architecto saepe nesciunt! Dolorem illo laborum, beatae
                      officia amet illum doloribus.
                    </p>
                    <div className="contacts">
                      <span className="facebook">
                        <FaFacebook style={{ color: "white" }} />
                      </span>
                      <span className="twitter">
                        <FaTwitter style={{ color: "white" }} />
                      </span>
                      <span className="linkedn">
                        <FaLinkedin style={{ color: "white" }} />
                      </span>
                      <span className="instagram">
                        <FaInstagram style={{ color: "white" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <div className="card">
                  <div className="imgWrapper">
                    <img src={person} alt="" />
                  </div>
                  <div className="details">
                    <span className="name">James Young</span>
                    <p>MARKETING</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quas neque molestias itaque quam aperiam eligendi! Nam
                      architecto saepe nesciunt! Dolorem illo laborum, beatae
                      officia amet illum doloribus.
                    </p>
                    <div className="contacts">
                      <span className="facebook">
                        <FaFacebook style={{ color: "white" }} />
                      </span>
                      <span className="twitter">
                        <FaTwitter style={{ color: "white" }} />
                      </span>
                      <span className="linkedn">
                        <FaLinkedin style={{ color: "white" }} />
                      </span>
                      <span className="instagram">
                        <FaInstagram style={{ color: "white" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>

      <section className="summerSale">
        <span>SPECIAL PROMO</span>
        <p>Summer Sale</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ab
          ipsum impedit incidunt similique! Eligendi laborum.
        </p>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <div className="card">
              <span>00</span>
              <p>weeks</p>
            </div>
            <div className="card">
              <span>00</span>
              <p>days</p>
            </div>
            <div className="card">
              <span>00</span>
              <p>hr</p>
            </div>
            <div className="card">
              <span>00</span>
              <p>min</p>
            </div>
            <div className="card">
              <span>00</span>
              <p>sec</p>
            </div>
          </Grid>
        </Grid>
        <button>SHOP NOW</button>
      </section>
    </>
  );
}

export default HomePage;
