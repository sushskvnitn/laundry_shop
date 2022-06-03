const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB, {
      useNewURLParser: true,
      useUnifiedTopology: true,
}).then(() => {
      console.log('DB connected');
}).catch(err => {
      console.log("connection error",err);
});
