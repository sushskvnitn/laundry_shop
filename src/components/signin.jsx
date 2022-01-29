import React, { useState } from "react";
import { motion } from "framer-motion";
import {useHistory} from "react-router-dom"// to navigate to login after registration successful 
function Signin() {
  const history = useHistory();
  const [user, setuser] = useState({// to set our default inputs 
    name: " ",
    email:" ",
    phone: " ",
    address: " ",
    password: " ",
    username: " ",
  });
  let name,value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value})

  };
  const postdata = async (e) => {
    e.preventDefault();

    const {name,email,phone,address,password,username} = user;//object destructuring 
    const res = await fetch("/user",{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        // name:name,email:email,phone:phone,address:address,password:password,username:username //CAN BE WRITTEN LIST BELO LINE AS KEY AND VALUE ARE SAME 
        name,email,phone,address,password,username
      })
    });
    const data  = await res.json();
 if (data.status === 422||!data){
   window.alert("invalid registration");
   console.log("invalid registration");
 }else{
  window.alert(" registration successful");
  console.log(" registration successful");
  history.push("/login");
 }




  };

  return (
    <div>
      <motion.div class="container card w-75 d-flex justify-content-center py-6 p-3"
      whileTap={{
        scale : 0.9
      }}
      >
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12  bg-danger placeholder-xs"></span>
        </p>

        <div class="w-100">
          <h3 class="mb-4 text-center">Signin</h3>
        </div>
        <form method="POST" class="row g-3">
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Name"
              required="true"
              value={user.name}
              onChange={handleInputs}
              name="name"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email" required="true"
              class="form-control"
              id="inputEmail4"
              value={user.email}
              onChange={handleInputs}
              name="email"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control" required="true"
              id="inputPassword4"
              value={user.password}
              onChange={handleInputs}
              name="password"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress" required="true"
              placeholder="1234 Main St"
              value={user.address}
              onChange={handleInputs}
              name="address"
            />
          </div>

          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              username
            </label>
            <input
              type="text"
              class="form-control" required="true"
              id="inputAddress2"
              placeholder="username"
              value={user.username}
              onChange={handleInputs}
              name="username"
            />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Phone
            </label>
            <input
              type="number"
              class="form-control"
              id="inputZip" required="true"
              value={user.phone}
              onChange={handleInputs}
              name="phone"
            />
          </div>

          <div class="col-12">
            <button
              type="submit"
              onClick={postdata}
              class="btn  btn-outline-danger"
            >
              Sign in
            </button>
          </div>
          <p class="bold">
            <span>
              if already user click
              <a
                id="signin"
                type="submit"
                href="/login"
                class="btn btn-sm btn-danger"
              >
                here
              </a>
              to login
            </span>
          </p>
        </form>
        <p class="placeholder-wave">
          <span class="placeholder col-12 bg-danger placeholder-xs"></span>
        </p>
      </motion.div>
    </div>
  );
}

export default Signin;
