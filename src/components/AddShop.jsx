import React,{ useState} from 'react'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ClearAllIcon from '@mui/icons-material/ClearAll';
const AddShop = () => {
  const [usedata, setdata] = useState({name:"",email:"",shopname:"",shopaddress:"",shopemail:"",phone:"",price:""});
  const handleinputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({...usedata,[name]:value});
  }
  const clear = () => {
    setdata({name:"",email:"",shopname:"",shopaddress:"",shopemail:"",phone:"",price:""});
  }
  //send data to server
  const handlesubmit =async (e) => {
    e.preventDefault();
    //object derefrencing
    const {name,email,shopname,shopaddress,shopemail,phone,price} = usedata; 

    const res = await fetch("/addshop",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,email,shopname,shopaddress,shopemail,phone,price
        })
        });
        const userdata = await res.json();
        console.log(userdata);
        if(!userdata){
          alert("Shop not added");
          console.log("Shop not added");
        }else{
          alert("Shop added");
          console.log("Shop added");
          setdata({name:"",email:"",shopname:"",shopaddress:"",shopemail:"",phone:"",price:""});
        }
        
  }
  return (
      <> 
    <div className="alert alert-warning alert-dismissible  show text-danger mx-4 m-1 " role="alert">
  <strong  >NOTE: You are requested to add shops in your locality only ‼️.</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      <h2 className=" text-bold h2  text-center w-50 ">Add Shop <AddBusinessIcon style={{color:"#4dabf5",height:"4rem"}}  /></h2>
    <div className="d-flex justify-content-center flex-wrap ">
     <iframe src="https://embed.lottiefiles.com/animation/97574" className="rounded m-3" title="fghfgh" style={{ "pointerEvents":"none", backgroundColor:"#cbeaff",height:"auto" }}></iframe>
 <div className="" style={{ width: '65%', height: '100%'}}>
 <form method="POST">
 <div className="d-flex justify-content-end">
 <button type="button" onClick={clear} className="btn text-danger align-end btn-block btn-sm "><ClearAllIcon/></button>
 </div>
  <div className="row ">
    <div className="col">
      <div className="form-outline">
        <input   name="name" value={usedata.name}  onChange={handleinputs} type="text" id="form6Example1" className="form-control my-3" placeholder="Owner Name" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input   name="email" value={usedata.email}  onChange={handleinputs} type="email" id="form6Example2" className="form-control my-3" placeholder="Owner Email" />
      </div>
    </div>
  </div>
  <div className="form-outline ">
    <input   name="shopname" value={usedata.shopname} onChange={handleinputs} type="text" id="form6Example3" className="form-control my-3" placeholder="Shop Name" />
  </div>
  <div className="form-outline ">
    <input   name="shopaddress" value={usedata.shopaddress}  onChange={handleinputs} type="text" id="form6Example4" className="form-control my-3" placeholder="Shop Address " />
  </div>
  <div className="form-outline ">
    <input   name="shopemail" value={usedata.shopemail}  onChange={handleinputs} type="email" id="form6Example5" className="form-control my-3" placeholder="Shop Email Address " />
  </div>
  <div className="form-outline ">
    <input   name="phone" value={usedata.phone} onChange={handleinputs} type="number" id="form6Example6" className="form-control my-3" placeholder="Phone number" />
  </div>
  <div className="form-outline ">
    <textarea name="price" value={usedata.price} onChange={handleinputs}  className="form-control my-3" id="form6Example7" rows="3" placeholder="prices list here (per items)"></textarea>
  </div>

  <button type="submit" onClick={handlesubmit}  className="btn btn-primary btn-block btn-sm">Submit</button>
</form>
 </div>
    </div>
    <br /> </>
  )
}

export default AddShop