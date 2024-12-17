import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../authVerification/firebase.init';
import axios from 'axios';

export const JobProvider = createContext()

const AuthProvider = ({children}) => {

    //create users with email and password
    const [user ,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const signUpWithEmailPassword = (email,password)=>{

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //login users with email,password

    const signInWithEmailPassword = (email,password)=>{

        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('state captured', currentUser)

            if(currentUser?.email){
                const user = {email:currentUser.email};
                axios.post('http://localhost:5000/jwt',user,{withCredentials:true})

                .then(res=> { console.log('login successfully',res.data)
                    
                })
                setLoading(false)  
            }
            else{
                axios.post('http://localhost:5000/logout',{},{withCredentials:true})
                .then(res=> {console.log('logout successfully',res.data)
                    setLoading(false);
                })
            }
            
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const value = {
        signUpWithEmailPassword,
        user,
        setUser,
        signInWithEmailPassword,
        loading

    }
    return (
       <JobProvider.Provider value={value}>
        {children}
       </JobProvider.Provider>
    );
};

export default AuthProvider;