import React, { useState, useEffect } from "react";

function Shop() {

  const [data, setdata] = useState([]);
  const gettodos = () => {
    fetch("laundryshop")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setdata(json);
      });
  };

  useEffect(() => {
    gettodos();
  }, []);

  return (
    <div>
      <div >
        <ul className="d-flex flex-wrap">
          {data.map((item) => {
            
            return (
              <div >
              
                <div  id="maping" style={{margin:"2rem"}}>
                  <div className="card" style={{width:'18rem'}}>
              <img className="img-fluid" src="https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />

                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.address}</p>
                      <button   className="btn  btn-danger">
                        book wash
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Shop;
