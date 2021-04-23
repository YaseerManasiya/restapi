require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const quoteRoute = require("./routes/quote");

const url = process.env.DB_URL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Lets build API");
});
app.use(express.json());
app.use("/quote", quoteRoute);
app.listen(process.env.PORT || 8000);
