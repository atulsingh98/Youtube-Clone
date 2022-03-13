const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Atul_Singh:newpassword@cluster0.13ss6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected!!!"))
  .catch((e) => console.log(e.message));
const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(5000);
