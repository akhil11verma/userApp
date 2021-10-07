const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const authenticate = require("./Authentication");
const path = require("path");
const port = 9001;
var cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname + "../public")));

require("./DatabaseConnection/index");
const User = require("./UserSchema/index");

app.post("/signup", async (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;

  if (!name || !email || !phone || !password || !confirmPassword) {
    return res.status(400).json({ error: "Please filled the details" });
  }
  try {
    const userDetails = await User.findOne({ email: email });

    if (userDetails) {
      return res.status(400).json({ error: "User Already Registered" });
    } else if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passowrd doesn't match" });
    } else {
      const user = new User({ name, email, phone, password, confirmPassword });
      await user.save();
      return res.status(200).json({ message: "User Successful Registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

let token;
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the Details..." });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const passwordVerify = await bcrypt.compare(password, userLogin.password);

      if (!passwordVerify) {
        return res.status(400).json({ error: "Invalid Credientials" });
      } else {
        token = await userLogin.generateToken();
        res.json({ message: "User Successful Login", authToken: token });
      }
    } else {
      console.log("Akhil");
      return res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/dashboard", authenticate, (req, res) => {
  res.send(req.rootUser);
});

app.get("/addUser", async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on...... ${port}`);
});
