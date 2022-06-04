const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
})
UserSchema.pre('save',async function(next) {
      if (this.isModified('password')) {
            this.password =await bcrypt.hash(this.password, 12);
            this.cpassword = await bcrypt.hash(this.cpassword, 12);
      }
      next();
})
const User = mongoose.model('USER', UserSchema);

module.exports = User;