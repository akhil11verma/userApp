const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/employees", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log("Database is not Connected");
  });
let conn = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/post", async (req, res) => {
  const { show, c1 } = req.body;

  // console.log(show);
  // console.log(req.body);

  // console.log(typeof show);
  let datapost;
  datapost = await conn
    .collection("data")
    .find({})
    .skip(show)
    .limit(c1)
    .toArray();
  // console.log(datapost.length);
  res.send(datapost);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
