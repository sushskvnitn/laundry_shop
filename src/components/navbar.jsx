import React,{useContext,useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import Logo from "./img/remlogo.png";
import {UserContext} from "../App"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const {state ,dispatch} = useContext(UserContext);
  const [data, setdata] = useState('');
  const userHome = async() => {
    try {
      const response = await fetch('/getuser',{
        method:"GET",
         headers:{
           "Content-Type":"application/json"
         },
      });
       const data = await response.json();
       setdata(data.coins);

    } catch (error) {
      console.log(error);
    } 
   }
   useEffect(() => {
      userHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  const RenderMenu =()=>{
    if(state){
      return (
        <>
          <div className="coins align-center py-2 mx-2"> <b className="mx-1 font-monospace" > {data}</b>
           <LocalAtmIcon  fontSize="small" color="warning" /> </div> 
          <li className="nav-item justify-content-end" type="submit"  >
              
              <Link
                className="nav-link fw-normal"
                to="/logout"
              >
                logout
              </Link>
              </li>
            
        </>
      )
    }else{
      return(
        <>
          <li className="nav-item justify-content-end" type="submit"  >
       <Link
                className="nav-link fw-normal"
                to="/signin"
              >
                Signin
              </Link></li> 
       <li className="nav-item justify-content-end" type="submit"  > 
       <Link
                className="nav-link fw-normal"
                to="/login"
              >
                login
              </Link></li>
     
        </>
      )
    }
  }

    return (
        <div id='nav'>
<nav className="navbar navbar-expand-lg  navbar-light "  style={{"backgroundColor":"#cceaff"}} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
     <b className="fw-bolder" style={{color: 'black',
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
                className="nav-link fw-normal"
                to="/"
              >
                 Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-normal"
                to="/about"
              >
                 About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-normal"
                to="/shop"
              >
                shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-normal"
                to="/services"
              >
                services
              </Link>
            </li>
            
      </ul>

     <ul className="navbar-nav  mb-2 ">
       <RenderMenu/>
       
      </ul>
    </div>
  </div>
</nav>
<div id='login'></div>

        </div>
    )
}

export default Navbar
