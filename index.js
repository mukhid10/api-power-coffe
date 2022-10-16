const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

//connect mongoDb Atlas
const connect = require("./configs/db");
connect;

//Midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/pictures", express.static(path.join(__dirname, "pictures")));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hei welcome in APi Power Cofee");
});

//allRouter
const allRouter = require("./routes/index");
app.use(allRouter);

app.listen(PORT, () => console.log("server is Okey"));
