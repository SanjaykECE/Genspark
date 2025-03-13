const { verifyToken } = require("../functions/jwt");

// user authorization middleware
const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")?.[1];
    if (!token) {
      return res.status(400).json({ message: "token not found" });
    }
    const payload = await verifyToken(token);
    if (!payload.success) {
      return res.status(400).json({ message: payload });
    }
    req.user = payload.data.id;
    next();
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = { auth };
