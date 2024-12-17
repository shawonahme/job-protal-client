
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../authVerification/firebase.init';
import { useNavigate } from 'react-router-dom';
const instance = axios.create({
    baseURL:'http://localhost:5000/',
    withCredentials:true
})
const UseAxios = () => {
  const nev = useNavigate()
    
    useEffect(()=>{

      instance.interceptors.response.use(response=>{
        return response
      }, error=>{

          if(error.status === 401 ||  error.status === 403){
           signOut(auth)
                   .then( res=>{
                      //  alert('log out scessfully')
                       nev('/login')
                   })
                   
            
          }
          return Promise.reject(error)
      })
    },[])
  
    return instance
};

export default UseAxios;