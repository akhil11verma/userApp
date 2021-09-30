const express = require("express");
const cors = require("cors");
const app = express();
const port = 9001;

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
  const { pageskip, c1 } = req.body;
  console.log(pageskip);
  let dummydataset;
  if (pageskip < 100) {
    dummydataset = await conn
      .collection("data")
      .find({})
      .skip(pageskip)
      .limit(c1)
      .toArray();
  }
  res.send(dummydataset);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
