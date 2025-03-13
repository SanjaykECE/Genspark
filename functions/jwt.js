const jwt = require("jsonwebtoken");
const key_val = require("../models/KeyVal");

// create jwt access token
const createAccessToken = async (id) => {
  try {
    const token = jwt.sign({ id: id }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: 60 * 30,
    });
    await key_val.create({ key: id + "userAccess", val: token });
    return token;
  } catch (err) {
    throw new Error(err);
  }
};

// create jwt refresh token
const createRefreshToken = async (id) => {
  try {
    const token = jwt.sign({ id: id }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "14d",
    });
    await key_val.create({ key: id + "userRefresh", val: token });
    return token;
  } catch (err) {
    throw new Error(err);
  }
};

// verify if jwt access token is correct
const verifyToken = async (token) => {
  try {
    const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const isValid = await key_val.findOne({ key: decode?.id + "userAccess" });
    if (!isValid) {
      return { error: "Invalid Token", success: false };
    }
    return { data: decode, success: true };
  } catch (err) {
    return { error: err, success: false };
  }
};

// verify if jwt refresh token is correct
const verifyRefreshToken = async (token) => {
  try {
    const decode = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const redisToken = await key_val.findOne({
      key: decode.id + "userRefresh",
    });
    if (!redisToken.val) {
      return { err: "Invaid RefreshToken", success: false };
    }
    return { data: decode, success: true };
  } catch (err) {
    return { error: err, success: false };
  }
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyToken,
  verifyRefreshToken,
};
