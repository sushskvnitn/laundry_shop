import React from "react";
import { motion } from "framer-motion";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div id="test1"></div>

      <motion.button
        className="btn btn-outline "
        style={{ backgroundColor: "#cceaff" }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
        drag
        dragConstraints={{
          right: 20,
          left: 0,
          top: 5,
          bottom: 40,
        }}
      >
        <ConnectWithoutContactIcon/>
      </motion.button>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      ></div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            contact us
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{ backgroundColor: "#cceaff" }}>
          <div className="card">
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                classname="card"
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "350px",
                  color: "black",
                  padding: "15px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  textAlign: "center",
                  textJustify: "auto",
                }}
              >
                <img
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  src="https://source.unsplash.com/200x200/?phone"
                  classname="card-img-top"
                  alt="images"
                />
                <div classname="card-body">
                  <h5 classname="card-title">contact us </h5>
                  <p classname="card-text">
                    <p>
                      mail us to :
                      <a
                        className="black-text"
                        href="https://gmail.google.com"
                        rel="noreferrer"
                      >
                        4kstatus.ssk@gmail.com
                      </a>
                      <br />
                    </p>
                  </p>
                </div>
                <div classname="card-body">
                  <br />

                  <p classname="card-link">
                    message on instagram :(for help only )
                    <a
                      className="black-text"
                      href="https://www.instagram.com/sushant_since_2002/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.instagram.com/
                      <br />
                      sushant_since_2002/
                    </a>
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cover">
        <div className="w-25">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "calc(50vw - 50%)" }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 50,
            }}
            className="d-flex flex-wrap"
          >
            <h1 className="heading text-center" style={{ color: "#0974b2" }}>
              HEY <br /> WELCOME
            </h1>
          </motion.div>
          <iframe src="https://embed.lottiefiles.com/animation/108241" id="me" title="hi"></iframe>
        </div>
        
        {/* <img
          className="rounded mx-auto d-block " 
          id="me"
          src="https://images.unsplash.com/photo-1561053720-76cd73ff22c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        /> */}
      </div>

      <div
        id="services"
        className="container justify-content-center text-center"
      >
      <div className="d-flex justify-content-end">  <Link className="m-2" to="/shop">
      <motion.button
        className="btn btn-outline "
        style={{ backgroundColor: "#cceaff" }}
        type="button"
        drag
        dragConstraints={{
          right: 20,
          left: 10,
          top: 15,
          bottom: 40,
        }}>
       <AddShoppingCartIcon/>
      </motion.button>
       </Link>
</div>
        <b>
          <h2>Services</h2>
        </b>
        <h3 className=" font-monospace">
          Here are some of our Highlited services
        </h3>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <img
            src="https://source.unsplash.com/330x250/?connect"
            className=" rounded mx-auto d-block"
            alt="..."
          ></img>
          <h4 className="my-3">Connections</h4>
          <p className="text-muted  font-monospace">
            we connect you to your laundryshop near you{" "}
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <img
            src="https://source.unsplash.com/330x250/?money"
            className=" rounded mx-auto d-block"
            alt="..."
          ></img>
          <h4 className="my-3">low prices </h4>
          <p className="text-muted  font-monospace">
            we provide you good washes at reasonable prices
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <img
            src="https://source.unsplash.com/330x250/?delivery"
            className="rounded mx-auto d-block"
            alt="..."
          ></img>
          <h4 className="my-3">home pickup and delivery</h4>
          <p className="text-muted  font-monospace">
            according to our terms and conditions <br /> the shopkeeper will
            come to your address and <br /> pickup your order
          </p>
        </motion.div>
      </div>

      <ul className="smooth-scroll list-unstyled text-end m-3">
        <li>
          <h5>
            <a href="#test1">go to top </a>
          </h5>
        </li>
      </ul>
    </>
  );
}

export default Home;
