const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());

const PORT = 3001;
const URL =
  "mongodb+srv://kuts:Pass321@cluster0.lqmc5b1.mongodb.net/node-form?retryWrites=true&w=majority";

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(`DB connection error: ${err} `));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  User.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(500).json({ error: "Sometthing goes wrong..." });
    });
});
