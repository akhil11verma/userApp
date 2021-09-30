const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const authenticate = require("./authenticate");
const path = require("path");
const { userInfo } = require("os");
const port = 9001;
var cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname + "../public")));

require("./conn");
const User = require("./userSchema");

app.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(400).json({ error: "Please filled the details" });
  }
  try {
    const userDetails = await User.findOne({ email: email });

    if (userDetails) {
      return res.status(400).json({ message: "User Already Registered" });
    } else if (password !== cpassword) {
      return res.status(400).json({ message: "Passowrd doesn't match" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });
      await user.save();
      res.status(200).json({ message: "User Successful Registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the Data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const passwordVerify = await bcrypt.compare(password, userLogin.password);

      let token = await userLogin.generateToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 28695000000),
        httpOnly: true,
      });

      if (!passwordVerify) {
        return res.status(400).json({ message: "Invalid Credientials" });
      } else {
        res.json({ message: "User Successful Login" });
      }
    } else {
      return res.status(400).json({ message: "Invalid Credientials" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/dashboard", authenticate, (req, res) => {
  res.send(req.rootUser);
});

app.get("/getData", authenticate, (req, res) => {
  res.send(req.rootUser);
});

app.get("/logout", (req, res) => {
  console.log("page is logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("Welcome to logout page");
});

app.post("/blog", authenticate, async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Please filled the details" });
  } else {
    console.log(req.rootUser.email);
    const email = req.rootUser.email;
    await User.updateOne(
      { email: email },
      { $push: { blog: { title: title, description: description } } }
    );
    res.json({ message: "User Successful Login" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
