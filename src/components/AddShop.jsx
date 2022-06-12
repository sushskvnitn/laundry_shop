import React from 'react'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
const AddShop = () => {
  return (
      <> 
    <br />
      <h2 className=" text-bold h2  text-center w-50 ">Add Shop <AddBusinessIcon style={{color:"#4dabf5",height:"4rem"}}  /></h2>
    <div className="d-flex justify-content-center flex-wrap ">
     <iframe src="https://embed.lottiefiles.com/animation/97574" className="rounded m-3" title="fghfgh" style={{ "pointerEvents":"none", backgroundColor:"#cbeaff",height:"auto" }}></iframe>
 <div className="" style={{ width: '65%', height: '100%'}}>
 <form>
  <div className="row ">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control my-3" placeholder="Owner Name" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="email" id="form6Example2" className="form-control my-3" placeholder="Owner Email" />
      </div>
    </div>
  </div>
  <div className="form-outline ">
    <input type="text" id="form6Example3" className="form-control my-3" placeholder="Shop Name" />
  </div>
  <div className="form-outline ">
    <input type="text" id="form6Example4" className="form-control my-3" placeholder="Shop Address " />
  </div>
  <div className="form-outline ">
    <input type="email" id="form6Example5" className="form-control my-3" placeholder="Shop Email Address " />
  </div>
  <div className="form-outline ">
    <input type="number" id="form6Example6" className="form-control my-3" placeholder="Phone number" />
  </div>
  <div className="form-outline ">
    <textarea className="form-control my-3" id="form6Example7" rows="3" placeholder="Additional information"></textarea>
  </div>
  <button type="submit" className="btn btn-primary btn-block btn-sm">Submit</button>
</form>
 </div>
    </div>
    <br /> </>
  )
}

export default AddShop