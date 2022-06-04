import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export default function MultiActionAreaCard() {
  return (
    <div className="container d-flex justify-content-center my-5 logn">
      <Card sx={{ maxWidth: 345 }} className="card m-2 p-2">
        <iframe src="https://embed.lottiefiles.com/animation/38435" title="hhgj" style={{"pointerEvents":"none"}}></iframe>
          
            <Typography gutterBottom variant="h5" component="div" className="logn ">
              login
            </Typography>
        <form method="POST" >
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>  
          <Link className="m-2"  to="/signin">
          <small> new user</small>
            </Link>
            <br />
          
          <button type="submit" className="btn btn-primary btn-sm m-2">
           login
          </button>
       
        </form>
      </Card>
    </div>
  );
}
