const express = require("express");
app = express();
const port = process.env.PORT || 5000;
const LaundryShop = require("./models/laundryschema");
const User = require("./models/user")
//connnecting to db
require("./db/connection");

//using json middleware
app.use(express.json());

//login 
app.get('/user', (async(req,res)=>{
try {
  const login = await User.find();
  res.send(login);

} catch (error) {
  res.status(404).send(error);
}
}))

// signup 
app.post('/user', async(req,res)=>{
    try {
      const Signin = new User(req.body);
      const postuser = await Signin.save();
      res.status(201).send(postuser);
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
  });



//adding shop
app.post("/laundryshop", async (req, res) => {
  try {
    const Shop = new LaundryShop(req.body);
    const createShop = await Shop.save();
    res.status(201).send(createShop);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
//getting  all shop
app.get("/laundryshop", async (req, res) => {
  try {
    const createShop = await LaundryShop.find();
    res.status(200).send(createShop);
    console.log(res)
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//getting  shop by id
app.get("/laundryshop/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const createShop = await LaundryShop.findById(_id);

    if (!createShop) {
      return res.status(404).send();
    } else {
      res.send(createShop);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
//update shop by id
app.patch("/laundryshop/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateShop = await LaundryShop.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateShop);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
//delete shop by id
app.delete("/laundryshop/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteShop = await LaundryShop.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(400).send();
    }
    res.send(deleteShop);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
