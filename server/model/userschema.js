const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  date: { type: Date, default: Date.now },
  shops: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      shopname: {
        type: String,
        required: true,
      },
      shopaddress: {
        type: String,
        required: true,
      },
      shopemail: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    }
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],

  coins: { type: Number, default: 0 },
});
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
UserSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    //return tokengenerated as we are using it in other method for authentication
    return token;
  } catch (error) {
    console.error(error);
  }
};
UserSchema.methods.addMessage = async function (name, email, shopname, shopaddress, shopemail, phone, price) {
  try {
    this.shops = this.shops.concat({ name, email, shopname, shopaddress, shopemail, phone, price,});
    this.coins = this.coins + 10;
    await this.save();
    return this.shops;
  } catch (error) {
    console.log(error);
  }
};
const User = mongoose.model("USER", UserSchema);

module.exports = User;
