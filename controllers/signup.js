const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const { createAccessToken, createRefreshToken } = require("../functions/jwt");
const key_val = require("../models/KeyVal");

// signup function
const signup = async (req, res) => {
  try {
    const { name, email, otp, password } = req.body;
    if (!name || !email || !password || !otp) {
      return res.status(400).json({ message: "All feilds are mandatory." });
    }

    const redisValue = await key_val.findOne({ key: email });

    await key_val.deleteOne({ key: email });
    if (redisValue.val != otp) {
      return res.status(400).json({ message: "Incorrect OTP." });
    }

    const isExisting = await User.findOne({ email: email });
    if (isExisting) {
      return res.status(400).json({ message: "User already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    if (user) {
      const accessToken = await createAccessToken(user._id);
      const refreshToken = await createRefreshToken(user._id);
      return res.status(200).json({
        message: "User created successfully.",
        accessToken,
        refreshToken,
      });
    } else {
      return res.status(400).json({ message: "Not able to create user." });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = signup;
