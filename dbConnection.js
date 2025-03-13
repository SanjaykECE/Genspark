const mongoose = require("mongoose");

// mongoDb connection
mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log("mongoDb Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
