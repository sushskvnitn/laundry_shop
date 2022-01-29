const mongoose = require("mongoose");
const validator = require("validator");

const user = new mongoose.Schema({

  username: { type: "string", required: true, minlength: 2, unique: true },
  name: { type: "string", required: true, minlength: 2, unique: true },
  address: { type: "string", required: true, minlength: 2 },
  password: { type: "string", required: true, minlength: 2 },
  phone: { type: "number", required: true, minlength: 10, unique: true },
  email: {
    type: "string",
    required: true,
    unique: [true, "email already present "],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("INVALID EMAIL");
      }
    },
  },
});
const User = new mongoose.model("User", user);
module.exports = User;
