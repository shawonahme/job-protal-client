import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { JobProvider } from '../AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../authVerification/firebase.init';
import './header.css'

const Header = () => {

    const{user} = useContext(JobProvider)

    //logOut function
    const handleLogOut = ()=>{
        signOut(auth)
        .then( res=>{
            alert('log out scessfully')
        })
        .catch(error =>{
            alert('logout failed')
        })
    }

    const links = <>

    <NavLink to='/' className='px-4 py-2'><li>Home</li></NavLink>
    <NavLink to={ '/all-jobs'} className='px-4 py-2'><li>All Jobs</li></NavLink>
    <NavLink to={ '/addjobs'} className='px-4 py-2'><li>Add Jobs</li></NavLink>
    <NavLink to={ '/myPostsJob'} className='px-4 py-2'><li>My Posts Job</li></NavLink>
    <NavLink to={ '/myApplication'} className='px-4 py-2'><li>My Application</li></NavLink>

    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
              {
                user? <div className=' flex gap-2 items-center'>
                    <img src={user.photoURL} className='w-[50px] rounded-full h-[50px]' alt="" />
                    <Link onClick={handleLogOut} className='btn'>Log Out</Link>
                </div>:  
                    <div className='flex gap-2 items-center'>
                <Link to='/login' className="btn">Login</Link>
                <Link to='/register' className="btn">Register</Link>
            </div>
              }
              </div>
            </div>
        </div>
    );
};

export default Header;