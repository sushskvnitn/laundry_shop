import React from "react";

function services() {
  return (
    <>
 
      <div className=" d-flex justify-content-center my-5 ">
        <iframe
          src="https://embed.lottiefiles.com/animation/96365"
          title="fghfgh"
          style={{ pointerEvents: "none", height: "18rem", width: "29rem" }}
        ></iframe>
      </div>
      <p>
        <h5>
         <p  className="text-start mx-3" id="tit">  here are some of our services :</p>
          <ul>
            <li>
              <h6 className="text-start p-3 font-monospace">
                We can book your laundry service for you.
              </h6>
            </li>
            <li>
              <h6 className="text-start p-3 font-monospace">
                We can place your shop location here and register it with free
                of cost.  
              </h6>
            </li>
            <li>
              <h6 className="text-start p-3 font-monospace">
                We will provide you a premium services and we connect you easily
              </h6>
            </li>

          </ul>
        </h5>
      </p>
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
            width: "400px",
            color: "black",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "5px",
            textAlign: "center",
            textJustify: "auto",
          }}
        >
          <div classname="card-body">
            <h5 classname="font_style" id="font_style">contact us </h5>
            <p classname="card-text ">
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
            <p classname="card-link">
              message owner :
              <a
                className="black-text"
                href="https://www.instagram.com/sushant_since_2002/"
                target="_blank"
                rel="noreferrer"
              >
                <br />
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default services;
