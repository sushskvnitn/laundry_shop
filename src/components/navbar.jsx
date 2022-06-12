import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./img/remlogo.png";
function navbar() {
    return (
        <div id='nav'>
          
<nav className="navbar navbar-expand-lg  navbar-light "  style={{"backgroundColor":"#cceaff"}} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
     <b style={{color: 'black',
    fontSize:'20px'}}>
    <img src={Logo} alt="" height="50rem" width="50rem" />
     Laundry Me</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color: 'white',
    }}>
            <li className="nav-item justify-content-end ">
              <Link
                className="nav-link font-monospace"
                to="/"
              >
                 Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link font-monospace"
                to="/about"
              >
                 About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link font-monospace"
                to="/shop"
              >
                shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link font-monospace"
                to="/services"
              >
                services
              </Link>
            </li>

      </ul>

     <ul className="navbar-nav  mb-2 ">
       
       <li className="nav-item justify-content-end" type="submit"  >
       <Link
                className="nav-link font-monospace"
                to="/signin"
              >
                Signin
              </Link></li> 
       <li className="nav-item justify-content-end" type="submit"  > 
       <Link
                className="nav-link font-monospace"
                to="/login"
              >
                login
              </Link></li>
               <li className="nav-item justify-content-end" type="submit"  > 
              <Link
                className="nav-link font-monospace"
                to="/logout"
              >
                logout
              </Link></li>
      </ul>
    </div>
  </div>
</nav>
<div id='login'></div>

        </div>
    )
}

export default navbar
