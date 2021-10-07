const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
  }
  next();
});

userSchema.methods.generateToken = async function () {
  let token = jwt.sign(
    { _id: this._id },
    "mynameisakhilandiamfromhisarharyanauttarpradesh"
  );
  this.tokens = this.tokens.concat({ token: token });
  await this.save();
  return token;
};

const User = new mongoose.model("UserDetails", userSchema);

module.exports = User;