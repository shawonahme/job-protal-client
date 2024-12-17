import React, { useContext } from 'react';
import {  Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { JobProvider } from '../../AuthProvider/AuthProvider';

const ApplyJob = () => {
    const {title,location,company,company_logo,_id} = useLoaderData();
    const {user} = useContext(JobProvider)
    const navigate = useNavigate()

    const handleApply = (e)=>{

       
     

        e.preventDefault()
        const applicant = user.email;
        const form = new FormData(e.target)
        const initialData = Object.fromEntries(form.entries());
        initialData.title = title
        initialData.location = location;
        initialData.company =  company;
        initialData.company_logo = company_logo;
        initialData.applicant_email = applicant;
        initialData.job_id = _id;
       console.log(initialData)
        fetch('http://localhost:5000/apply',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(initialData)
        })
        .then(res=> res.json())
        .then(data=>{
         
            if(data.ok){
                // alert(data.message)
                return   <Navigate  to='/myApplicaion'></Navigate>
              
            }
            else{
                alert(data.message)
            //    return  navigate('/all-jobs')
                
                
            }
        })
        .catch(error=>{
            alert('aleader')
        })
        
       

        // console.log(initialData)
    }
    return (
        <div className="card bg-base-100 w-8/12 my-12 mx-auto shadow-2xl">
        <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
        <form  onSubmit={handleApply}  className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">LinkedIn URL</span>
                </label>
                <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Github URL</span>
                </label>
                <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Resume URL</span>
                </label>
                <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Apply</button>
            </div>
        </form>
    </div>
    );
};

export default ApplyJob;