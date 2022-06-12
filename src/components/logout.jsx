import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
const Logout = () => {
      //promises
      const navigate =useHistory();
      useEffect(()=>{
            fetch('/logout',{
                  method:'GET',
                  headers:{
                        Accept:'application/json',
                        "Content-Type":"application/json"
                  },
                  credentials:'include'
            }).then((res)=>{
                  console.log(res);
                  navigate.push('/login');
                  if(res.status!==200){
                        const error = new Error(res.error);
                        throw error;
                  }
            }).catch((err)=>{
                  console.log(err);
            });
      });
  return (
    <div>logout</div>
  )
}

export default Logout