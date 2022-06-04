const express = require("express");
const router = express.Router();
const User = require("../model/userschema");
const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {
  const { name, email, phone, address, password, cpassword } = req.body;
  if (!name || !email || !phone || !address || !password || !cpassword) {
    res.status(400).json({ msg: "Please fill all the fields" });
  }
  try {
    const userexist = await User.findOne({ email: email });
    if (userexist) {
      return res.status(400).json({ msg: "User already exists" });
    } else if (password !== cpassword) {
      return res.status(400).json({ msg: "Password does not match" });
    } else {
      const newUser = new User({
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
        cpassword: cpassword,
      });
      await newUser.save();
      res.status(201).json({ msg: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please fill all the fields" });
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    res.status(200).json({ msg: "Login successful" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
