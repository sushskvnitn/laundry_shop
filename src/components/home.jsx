import React,{ useState, useEffect} from "react";
import { motion } from "framer-motion";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
function Home() {
  const [UserName, setUserName] = useState('');
  const [show, setshow] = useState(false);
  const userHome = async() => {
   try {
     const response = await fetch('/getuser',{
       method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
        credentials:"include",
     });
      const data = await response.json();
      setUserName(data.name);
      setshow(true);
   } catch (error) {
     console.log(error);
   } 
  }
  useEffect(() => {
    userHome();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        tabIndex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      ></div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
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
                className="card"
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
                  className="card-img-top"
                  alt="images"
                />
                <div className="card-body">
                  <h5 className="card-title">contact us </h5>
                  <div className="card-text">
                    <div>
                      mail us to :
                      <a
                        className="black-text"
                        href="https://gmail.google.com"
                        rel="noreferrer"
                      >
                        4kstatus.ssk@gmail.com
                      </a>
                      <br />
                    </div>
                  </div>
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
              HEY  {UserName? UserName.toUpperCase():"WELCOME "} <br />
            </h1>
            <h3 className="text-center">{show?'Glad, to see you back 😁':' we are Happy to see you '} </h3>
          </motion.div>
          <iframe src="https://embed.lottiefiles.com/animation/108241" id="me" title="hi"></iframe>
        </div>
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
