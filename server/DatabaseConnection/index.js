const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/User", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log("Database is not Connected");
  });
