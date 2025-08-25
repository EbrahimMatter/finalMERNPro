const express = require("express");
const User = require("../model/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, role } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "Email exists" });

  const user = new User({ name, email, role });
  await user.save();
  res.json({ message: "Registered", user });
});

router.post("/login", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  req.user = user;
  res.json({ message: "Login success", user });
});

module.exports = router;
