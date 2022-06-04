import React,{useState,useEffect} from "react";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
function Shop() {
  const [data, setdata] = useState([]);
  const gettodos = () => {
    fetch("/getdata")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setdata(json);
        console.log(data);
      });
  }

 useEffect(() => {
    gettodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //search address feature
  const [query, setquery] = useState("");
  const getfilteredItems = (query,data) => {
   if(!query) return data;
    return data.filter(item => item.address.toLowerCase().includes(query.toLowerCase()));
  }
  const filteredItems = getfilteredItems(query,data);

 

  return (
    <div>
      <div className="input-group d-flex justify-content-end ">
        <div className="form-outline">
          <input
            type="search" value={query}
            id="form1" onChange={(e) => setquery(e.target.value)}
            className="form-control align-middle"
            placeholder="Search"
          />
        </div>
      </div>


      <div>
      <h3> Shops </h3><br />
        <ul className="d-flex flex-wrap users">
         
          {filteredItems.map((item) => {
            return (
              <div >

                <div  id="maping" style={{margin:"1rem"}}>
                  <div className="card" style={{width:'18rem'}}>
                  <div className="d-flex justify-content-center">
              <img className="img-fluid" style={{"height":"8rem",width:"8rem"}} src="https://media.istockphoto.com/vectors/female-maid-help-man-to-put-clothes-into-washing-machine-vector-id1293206204?k=20&m=1293206204&s=612x612&w=0&h=Ew5LCcsM1ze7q4nPitvFhFChHUEN2ohPHvor9fyaB2o=" alt="" />
</div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.address}</p>
                      <div className="d-flex justify-content-end" >
                      <button   className="btn btn-danger btn-sm rounded-circle px-3" style={{"marginTop":"-4rem"}} >
                        <LocalLaundryServiceIcon/>
                      </button>
                      </div>
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
