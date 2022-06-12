import React from 'react'

function about() {
    return (
        <div>
            <div className=" d-flex justify-content-center my-5">
            <iframe src="https://embed.lottiefiles.com/animation/68816" title="fghfgh" style={{ "pointerEvents":"none" }}></iframe>
          </div> <div className='d-flex justify-content-center  text-center'  style={{ paddingTop:"30px",margin:'25px'}} >
              <div className='bg-image hover-zoom'><img src="https://source.unsplash.com/200x200/?shops" alt="" className=' rounded d-none d-lg-block img-fluid ' id='abtimg' /></div>  
               <h5 className='text-center p-3 font-monospace' >This is a laundary app which will help you to book your nearby laundry <br /> for you to use it. We can do both in this app, that is we can book laundary or place your <br /> shop location here and register it with free of cost. </h5>
           </div>
           <div className='d-flex justify-content-center text-center' style={{ paddingTop:"30px",margin:'25px'}} >
               <h5 className='text-center p-3 font-monospace' >we will provide you a premium services and we connect you easily</h5>
               <img src="https://source.unsplash.com/200x200/?laundry" alt="" className='hover-shadow hover-Zoom rounded d-none d-lg-block img-fluid ' id='abtimg' />
           </div>
           <h4 className="text-center p-3   bg-white rounded ">
          We are a team of dedicated and dedicated people who are dedicated to
          providing you the best services.
        </h4>
        </div>
    )
}
export default about
