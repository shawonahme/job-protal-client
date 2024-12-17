import React, { useContext } from 'react';
import { JobProvider } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {loading,user} = useContext(JobProvider)
    
    const location = useLocation();
    if(loading){
        return <>
         <div className='text-center my-12 h-screen'>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div></>
    }
    if(user){
        return children
    }
    return  <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRouter;