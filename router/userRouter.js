const express = require("express");
const User = require("../model/user");

const router = express.Router();

// Register (anyone)
router.post("/register", async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email exists" });

    const user = new User({ name, email, role });
    await user.save();
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login (simple)
router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    res.json({ message: "Login success", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
