const express = require("express");
const app = express();
const cors = require("cors");
const FoodRouter = require("./../backend/routers/FoodRouters");
const bodyParser = require("body-parser");
require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 5050;
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hallo");
});

app.use("/", FoodRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
