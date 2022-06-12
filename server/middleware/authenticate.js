const jwt = require('jsonwebtoken');
const User = require('../model/userschema');
const authenticate = async (req, res, next) => {
      try {
      const token = req.cookies.jwtoken;
      const verifytoken = jwt.verify(token, process.env.JWT_KEY); 
      const user = await User.findOne({ _id: verifytoken._id, 'tokens.token': token });   
      if (!user) {
            throw new Error("User not found");
      }
      req.user = user;
      req.token = token;
      req.userID = user._id;
      next();
      } catch (error) {
      res.status(401).send("unauthorized: no token provided");
      console.log(error); 
      }
}
module.exports = authenticate;