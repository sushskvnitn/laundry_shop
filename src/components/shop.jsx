/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Shop() {
  const [data, setdata] = useState([]);
  const [shopdata, setshopdata] = useState([]);
  const navigate = useHistory();
  const authuser = async () => {
    try {
      const res = await fetch("/shop", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      // console.log(data);
      // setdata(data);
      if (!res.status === 200) {
        alert("error");
      }
    } catch (error) {
      console.log(error);
      navigate.push("/login");
    }
  };
  const gettodos = () => {
    fetch("/getdata")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setdata(json);
        console.log(data);
      });
  };
  const [connect, connectdata] = useState({
    to: "",
    name: "",
    address: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
 
  const handleinputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    connectdata({ ...connect, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { to, name, address, email, phone, date, time } = connect;
    await axios
      .post("/sendmail", connect)
      .then((response) => alert("mail sent successfully !! , shop keeper will contact you soon !!"))
      ;
  };

  const clear = () => {
    connectdata({
      to: "",
      name: "",
      address: "",
      email: "",
      phone: "",
      date: "",
      time: "",
    });
  };
  useEffect(() => {
    gettodos();
    authuser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // search address feature
  const [query, setquery] = useState("");
  const getfilteredItems = (query, data) => {
    if (!query) return data;
    return data.filter((item) =>
      item.address.toLowerCase().includes(query.toLowerCase())
    );
  };
  const filteredItems = getfilteredItems(query, data);

  return (
    <div>
    <div id="test2"></div>
      <div className="input-group d-flex justify-content-end ">
        <div className="form-outline m-1">
          <input
            type="search"
            value={query}
            id="form1"
            onChange={(e) => setquery(e.target.value)}
            className="form-control align-middle"
            placeholder="Search location"
          />
        </div>
      </div>
      <div>
        <h3 className="fw-bold mx-4"> Shops </h3>
        <div className="d-flex justify-content-end ">
          <Link to="/addshop">
            <button className="btn btn-primary btn-sm mx-5">Add Shop</button>
          </Link>
        </div>
        <ul className=" users">
          {filteredItems.map((item) => {
            return (
              <div className="d-flex flex-wrap">
              
                {item &&
                  item.shops &&
                  item.shops.map(function (shop) {
                    return (
                      
                      <div id="maping" style={{ margin: "1rem" }}>
                     <strong>  <b><h6 className="text-end bg-danger text-white shadow  rounded p-1" >{item.address}</h6></b></strong>
                        <div className="card" style={{ width: "18rem" }}>
                          <div>
                            <div className="d-flex justify-content-center">
                              <img
                                className="img-fluid"
                                style={{ height: "5rem", width: "5rem" }}
                                src="https://media.istockphoto.com/vectors/female-maid-help-man-to-put-clothes-into-washing-machine-vector-id1293206204?k=20&m=1293206204&s=612x612&w=0&h=Ew5LCcsM1ze7q4nPitvFhFChHUEN2ohPHvor9fyaB2o="
                                alt=""
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">{shop.shopname}</h5>
                              <p className="card-text">
                                address :{shop.shopaddress}
                              </p>
                              <p className="card-text">
                                shop Email : {shop.shopemail}
                              </p>
                              <p className="card-text">
                                shop Phone: {shop.phone}
                              </p>
                              <p className="card-text">
                                shop info: {shop.price}
                              </p>
                              <div className="d-flex justify-content-end">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  className="btn btn-danger btn-sm rounded-circle px-3"
                                  style={{ marginTop: "-4rem" }}
                                  onClick={() => {
                                    setshopdata(shop);
                                  }}
                                >
                                  <LocalLaundryServiceIcon />
                                </button>
                                <div
                                  className="modal fade  "
                                  id="exampleModal"
                                  tabIndex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title fw-bold "
                                          id="exampleModalLabel"
                                        >
                                          shop: {shopdata.name}
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div className="modal-body">
                                        <iframe
                                          src="https://embed.lottiefiles.com/animation/106614"
                                          title="hhgj"
                                          style={{
                                            pointerEvents: "none",
                                            width: "100%",
                                            height: "100%",
                                          }}
                                        ></iframe>
                                        <div className="form-group">
                                          owner email
                                          <input 
                                            type="email"
                                            className="input form-control disabled"
                                            aria-describedby="emailHelp"
                                            placeholder="Email id of shopkeeper"
                                            value={connect.to}
                                            name="to"
                                            onChange={
                                              (connect.to =
                                                shopdata.shopemail)
                                            }
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="exampleInputEmail1">
                                            Your full Name :
                                          </label>
                                          <input
                                            type="text"
                                            className="input form-control"
                                            placeholder="Enter Name here "
                                            onChange={handleinputs}
                                            name="name"
                                            value={connect.name}
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="exampleInputEmail1">
                                            Your current Address :
                                          </label>
                                          <input
                                            type="text"
                                            className="input form-control"
                                            placeholder="Enter your complete address"
                                            onChange={handleinputs}
                                            name="address"
                                            value={connect.address}
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="exampleInputEmail1">
                                            Your Email Address :
                                          </label>
                                          <input
                                            type="email"
                                            className="input form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter your Email "
                                            onChange={handleinputs}
                                            name="email"
                                            value={connect.email}
                                          />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="exampleInputEmail1">
                                            Your Phone Number :
                                          </label>
                                          <input
                                            type="Number"
                                            className="input form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter your Phone Number "
                                            onChange={handleinputs}
                                            name="phone"
                                            value={connect.phone}
                                          />
                                        </div>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="form-group">
                                              <label htmlFor="exampleInputEmail1">
                                                Date to pick up your cloths :
                                              </label>
                                              <input
                                                type="date"
                                                className="input form-control"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter date here  "
                                                onChange={handleinputs}
                                                name="date"
                                                value={connect.date}
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="form-group">
                                              <label htmlFor="exampleInputEmail1">
                                                prefered timing :
                                              </label>
                                              <input
                                                type="time"
                                                className="input form-control"
                                                placeholder="Enter timing here  "
                                                onChange={handleinputs}
                                                name="time"
                                                value={connect.time}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer">
                                      <button
                                          type="button"
                                          className="btn btn-danger btn-sm"
                                          data-bs-dismiss="modal"
                                          onClick={clear}
                                        >
                                          <CloseIcon />
                                        </button>
                                      <div className="d-flex justify-content-start">
                                       <a  className="btn btn-primary btn-sm" href={`https://wa.me/${shopdata.phone}`} 
                                            target="_blank" rel="noreferrer" ><WhatsAppIcon/></a>
                                      <a  className="btn btn-primary btn-sm"
                                           href={`tel:${shopdata.phone}`}> <CallIcon/> </a>        
                                      </div>
         
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-sm"
                                          onClick={onSubmit}
                                        >
                                          <SendIcon />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </ul>
        <ul className="smooth-scroll list-unstyled text-end m-3">
        <li>
          <h5>
            <a href="#test2">go to top </a>
          </h5>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Shop;
