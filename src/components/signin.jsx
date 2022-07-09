import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link, useHistory } from "react-router-dom";
export default function MultiActionAreaCard() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
  });
  const navigate = useHistory();
  const handleinputs = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !user.name ||
      !user.email ||
      !user.phone ||
      !user.address ||
      !user.password ||
      !user.cpassword
    ) {
      alert("Please fill all the fields");
    } else if (user.password !== user.cpassword) {
      alert("Password and confirm password does not match");
    } else {
      const { name, email, phone, address, password, cpassword } = user;
      const data = { name, email, phone, address, password, cpassword };
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.error) {
        alert(result.error);
      } else {
        alert("Registered Successfully");
        navigate.push("/login");
      }
    }
  };

  return (
    <div className=" d-flex justify-content-center">
      <div className="shadow rounded bg-white w-75 my-2">
        <Typography
          gutterBottom
          variant="h5"
          className="text-center my-2"
          component="div"
        >
          Register
        </Typography>
        <div className="container  d-flex justify-content-center my-5 ">
          <iframe
            src="https://embed.lottiefiles.com/animation/86974"
            className="d-none d-sm-block"
            title="hhgj"
            style={{ pointerEvents: "none" }}
          ></iframe>

          <form method="POST">
            <small className="text-danger text-end">
              all fields are compulsory*
            </small>
            <div className="form-group m-1">
              <input
                type="name"
                name="name"
                className="form-control"
                onChange={handleinputs}
                value={user.name}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group m-1">
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleinputs}
                value={user.email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group m-1">
              <input
                type="number"
                name="phone"
                className="form-control"
                onChange={handleinputs}
                value={user.phone}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-group m-1">
              <input
                type="address"
                name="address"
                className="form-control"
                onChange={handleinputs}
                value={user.address}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter address"
              />
            </div>
            <div className="form-group m-1">
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleinputs}
                value={user.password}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group m-1">
              <input
                type="password"
                name="cpassword"
                className="form-control"
                onChange={handleinputs}
                value={user.cpassword}
                id="exampleInputPassword1"
                placeholder="confirm  Password"
              />
            </div>
            <Link className="m-2" to="/login">
              <small> already a user ? click here</small>
            </Link>
            <br />

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary btn-sm m-2"
            >
              register
            </button>
          </form>
        </div>
        <br />
      </div>
      <div className="d-block d-sm-none">
        
      </div><br /> <br /> <br /> <br />
    </div>
  );
}
