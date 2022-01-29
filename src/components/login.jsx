import React from "react";

function login() {
  async function getuser() {

    const username = document.getElementById('inp').value;
    const warning = document.getElementById('alert');
    const washout = document.getElementById('washout');
    const password = document.getElementById('password').value;

    try {
      const res = await fetch("/user", { method: "get" });
      var data = await res.json();
    } catch (error) {
      console.log(error);
    }

    if(username===data[(data.length )- 1].username && password ===data[(data.length )- 1].password){
        washout.innerHTML = `
        <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="m-b-20"><strong>Your customers will love you <br> one minute from now.</strong></h1>
                            <p class="m-b-40">See how your users experience your website in realtime or view  <br> trends to see any changes in performance over time.</p>
                            <p><a class="btn btn-lg bg-warning btn-circle btn-brand" href="#">Get Started</a> <br> <a class="btn bg-warning btn-lg btn-circle btn-outline-new-white" href="#">Learn More</a></p>
                        </div>
                    </div>
                </div>
    <section class="bg-dark text-white pb-0 separator-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 text-center">
            <h1>Start building <b>beautiful &amp; functional</b> landing pages in minutes.</h1>
          </div>
          <div class="col-12 mt-10">
            <img class="img-fluid" src="https://source.unsplash.com/1200x500/?shop" alt="Demo Pages Preview">
          </div>
        </div>
      </div>
    </section> `
        warning.innerHTML=`
   <div class="alert alert-success alert-dismissible fade show" role="alert">
   <strong>login Successful !</strong> 
 </div>



        `

    }
    else{
        alert("invalid user")
    }
  }

  return (
    <>
    <div id="alert" ></div>
    <div id="washout">
      <div class="container w-75 py-5">
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12  bg-danger placeholder-xs"></span>
        </p>

        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-5">
            <div class="wrap">
              <div class="img"></div>
              <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Login</h3>
                  </div>
                </div>
                <form action="#" class="signin-form">
                  <div class="form-group mt-3 m-3">
                  <label class="form-control-placeholder" for="username">
                      Username
                    </label>
                      <input type="text" id="inp" class="form-control" required="true" />
                    
                  </div>
                  <div class="form-group m-3"> 
                   <label class="form-control-placeholder" for="password">
                      Password
                    </label>
                    <input
                      id="password"
                      type="current-password"
                      class="form-control"
                      required="true"
                    />
                  
                  </div>
                  <div class="form-group m-3">
                    <button
                      onClick={getuser}
                      class="form-control btn btn-danger rounded submit px-3"
                    >
                      Login
                    </button>
                  </div>
                  <div class="form-group d-md-flex"></div>
                </form>
                <p class="text-center">
                  Not a member?{" "}
                  <a data-toggle="tab" href="/signin">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12  bg-danger placeholder-xs"></span>
        </p>
      </div>
      </div>
    </>
  );
}

export default login;
