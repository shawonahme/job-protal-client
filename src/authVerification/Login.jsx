import React, { useContext } from 'react';
import { JobProvider } from '../AuthProvider/AuthProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Lottie from 'lottie-react';
import loginLottie from '../../src/assets/lottile/login.json'
import { Link } from 'react-router-dom';

const Login = () => {

  const {signInWithEmailPassword,setUser} = useContext(JobProvider)

  const handleLogin = (e)=>{

    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    
    signInWithEmailPassword(email,password)
    .then(data=> {
      alert('login successfully')
        setUser(data.user)
      
    })
    .catch(error=>{


    })



}
    return (
        <div className="hero bg-base-200 ">
      
         
          <div className='grid md:grid-cols-2 mx-auto w-9/12 my-12'>
          <div><Lottie animationData={loginLottie}></Lottie></div>

          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <h2 className='text-3xl font-bold text-center  pt-6'>Login Here</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className='text-lg pt-2 font-semibold'>Don't  Have Any  Account?  <Link className='text-purple-800' to='/register'>Register</Link> </p>
            </form>
          </div>
          </div>
        </div>
      
    );
};

export default Login;