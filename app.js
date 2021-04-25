require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const quoteRoute = require("./routes/quote");
const cors = require("cors");

const url = process.env.DB_URL;
app.use(cors());
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Yaseer Manasiya");
});

app.use(express.json());
app.use("/quote", quoteRoute);
app.listen(process.env.PORT || 8000);
