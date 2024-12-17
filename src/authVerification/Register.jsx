import React, { useContext } from 'react';
import { JobProvider } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from './firebase.init';
import register from '../../src/assets/lottile/register.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const Register = () => {
    const {signUpWithEmailPassword,user,setUser} = useContext(JobProvider)
    console.log(user)

    const handleRegister = (e)=>{

        e.preventDefault()
        const from = e.target;
        const userName = from.userName.value;
        const email = from.email.value;
        const password = from.password.value;
        const conPass = from.conPass.value;
        const photoURL = from.photoURL.value;
        signUpWithEmailPassword(email,password)
        .then(data=> {

            setUser(data.user)

            updateProfile(auth.currentUser,{displayName:userName, photoURL: photoURL})
            .then(updateUser =>{

                alert('register successfully')
                from.reset()

               setUser({...data.user, displayName:userName, photoURL: photoURL})

              

        
            })
            .catch(error =>{
                
            })

           
        })
        
        .catch(error=>{


        })

       

    }
    return (
        <div>
            <div className="hero bg-base-200  min-h-screen">
               
                    
                        
                      
                  
                    <div className='grid grid-cols-2 items-center gap-4 w-10/12 mx-auto my-12'>
                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <h2 className='text-3xl font-bold text-center  pt-6'>Register Here</h2>
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='userName' placeholder="user name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photo   " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name= 'email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name= 'password' placeholder="password" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confrim Password</span>
                                </label>
                                <input type="password" name= 'conPass' placeholder="confrim password" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='text-lg pt-2 font-semibold'>Already Have An  Account?  <Link className='text-purple-800' to='/login'>Login</Link> </p>
                        </form>
                    </div>
                    <div>
                        <Lottie animationData={register}></Lottie>

                    </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Register;