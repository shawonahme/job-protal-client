import React, { useEffect, useState } from 'react';
import Card from '../assets/allComponents/Card';
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{

       fetch('http://localhost:5000/allJobs')
       .then(res => res.json())
       .then(data=> setJobs(data))
    },[])
   return (
      <div className='w-11/12 mx-auto min-h-screen my-12'>
      
         <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
          {
           jobs.map(job=> <Card key={job._id} jobs = {job}></Card>)
          } 
       </div>
       
      </div>
   );
};

export default AllJobs;