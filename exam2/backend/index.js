const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
require("./src/config/db");
// console.log("port", process.env.PORT);

const MealRouter = require("./src/routers/MealRouter");

app.get("/", (req, res) => {
  res.send("Hallo");
});

app.use("/", MealRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
