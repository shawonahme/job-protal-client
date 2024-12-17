import React, { useEffect, useState } from 'react';
import Card from './Card';
import { div } from 'framer-motion/client';
import { Link } from 'react-router-dom';


const JobsCards = () => {

    const [jobs,setJobs] = useState([]);
     useEffect(()=>{

        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data=> setJobs(data))
     },[])
    return (
       <div className='w-11/12 mx-auto'>
          <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
           {
            jobs.map(job=> <Card key={job._id} jobs = {job}></Card>)
           } 
        </div>
        <div className='my-4'>
            <Link to='/all-jobs' className=' py-2 px-4  bg-green-600 text-white rounded-md '>All Jobs</Link>
        </div>

       </div>
    );
};

export default JobsCards;