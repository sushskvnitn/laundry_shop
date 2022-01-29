const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/laundry-api", {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successfull`);
  })
  .catch((err) => {
    console.log(err);
  });
