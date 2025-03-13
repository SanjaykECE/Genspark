const mongoose = require("mongoose");

// database schema for key value storage
const userSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  val: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Keyval", userSchema);
