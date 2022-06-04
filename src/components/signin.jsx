import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export default function MultiActionAreaCard() {
  return (
    <div className=" d-flex justify-content-center"> 
   
    <div className="shadow rounded bg-white w-75">
     <Typography gutterBottom variant="h5" className="text-center my-2" component="div" >
              Register
            </Typography>
        <div className="container  d-flex justify-content-center my-5 ">
        <iframe src="https://embed.lottiefiles.com/animation/86974" className="d-none d-sm-block" title="hhgj" style={{"pointerEvents":"none"}}></iframe>
          
            
        <form method="POST" >
        <small className="text-danger text-end" >all fields are compulsory*</small>
          <div className="form-group m-1">
            <input
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>
           <div className="form-group m-1">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
           <div className="form-group m-1">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter phone number"
            />
          </div>
           <div className="form-group m-1">
            <input
              type="address"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter address"
            />
          </div>
           <div className="form-group m-1">
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter password"
            />
          </div>
          
          <div className="form-group m-1">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="confirm  Password"
            />
          </div>  
          <Link className="m-2"  to="/login">
          <small> already a user ? click here</small>
            </Link>
            <br />
          
          <button type="submit" className="btn btn-primary btn-sm m-2">
           register
          </button>
       
        </form>
        </div>
        <br />
    </div>
    </div>
  );
}
