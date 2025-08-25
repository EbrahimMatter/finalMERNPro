const e = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["author", "admin"],
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
