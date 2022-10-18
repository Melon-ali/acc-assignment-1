const express = require("express");
const fs = require("fs");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.all("*", (req, res) => {
  res.status(404).send("Route Not Found");
});

app.listen(port, () => {
  console.log(`Port Connected.${port}`);
});
