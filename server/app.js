const express = require("express");
const dotenv =require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
require("./model/userschema");
dotenv.config({path: './config.env'})
require('./db/connection')
app.use(express.json());
app.use(require("./router/auth"));
app.get('/', (req, res) =>{
      res.send('Hello World');
})
app.listen(PORT, (req, res) => {
      console.log('listening on port 5000');
});