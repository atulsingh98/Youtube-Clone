const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const config = require("./config/key");
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DB connected!!!"))
  .catch((e) => console.log(e.message));
const app = express();
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(routes);

app.get("/api/users/register", (req, res) => {
  res.send("hello");
});
app.listen(5000);
