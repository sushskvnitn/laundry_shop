import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {UserContext} from "../App"
import { useContext } from 'react';
const Logout = () => {
  const {state ,dispatch} = useContext(UserContext);
  console.log(state);
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
              dispatch({ type: "USER", payload: false });
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