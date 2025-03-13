const key_val = require("../models/KeyVal");

// logout function
const logout = async (req, res) => {
  try {
    const id = req.user;
    await key_val.deleteOne({ key: id + "userAccess" });
    await key_val.deleteOne({ key: id + "userRefresh" });
    res.status(200).json({ message: "user logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = logout;
