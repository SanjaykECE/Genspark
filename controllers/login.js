const { createAccessToken, createRefreshToken } = require("../functions/jwt");
const User = require("../models/Users");
const bcrypt = require("bcryptjs");

// login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email || password)) {
      return res.status(400).json({ message: "All feilds are mandatory." });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: "User does not exists." });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    const accessToken = await createAccessToken(user._id);
    const refreshToken = await createRefreshToken(user._id);
    return res
      .status(200)
      .json({ message: "User logged in.", accessToken, refreshToken });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = login;
