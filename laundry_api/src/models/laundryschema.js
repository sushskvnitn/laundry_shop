const mongoose = require("mongoose");
const validator = require("validator");

const laundryShop = new mongoose.Schema({
  name: { type: "string", required: true, minlength: 2, unique: true },
  address: { type: "string", required: true, minlength: 2 },
  shopkeeper: { type: "string", required: true, minlength: 2 },
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
const LaundryShop = new mongoose.model("LaundryShop", laundryShop);
module.exports = LaundryShop;
