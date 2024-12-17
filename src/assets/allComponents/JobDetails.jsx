import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';
import { MdSettingsApplications } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id,title,hr_name,company_logo,hr_email,status,responsibilities,requirements,company,description,salaryRange,category,applicationDeadline,jobType,location} = useLoaderData()
    return (
        <div>
        <div className="card bg-base-100 flex flex-col h-full w-8/12 mx-auto  p-4 shadow-xl">
<div className='flex-grow'>
<div className='flex items-center gap-2'>
<div className='w-16'>
<img className='w-full object-cover' src={company_logo} alt="" />
</div>
<div>
<h2 className='text-xl font-bold'>{company}</h2>
<div className='flex items-center  text-sm gap-1'>
<CiLocationOn color='gray'/> <p className='text-gray-600'> {location}</p>
</div>
</div>

</div>
<div className="card-body">
<div className='flex-grow'>
<h2 className="card-title">{title}</h2>

<div className='flex items-center gap-1 text-gray-600'>
<MdSettingsApplications />

<p> 
    {category}

</p>
</div>

<p className='text-gray-500 font-semibold leading-8'>{description}</p>
<div className='flex gap-2 my-2 flex-wrap'>
{requirements.map(req => <button className='bg-gray-200 py-1  text-sm px-2 rounded-md'>{req}</button> )}
</div>
<p className='flex items-center py-2 text-gray-600'> <span className='font-semibold'>Salary: </span> <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
</div>

</div>
</div>
<div className="card-actions justify-end ">
  <Link to={`/Applicant/${_id}`}  className=" py-2 px-4  bg-blue-600 text-white rounded-md ">Apply Now</Link>
</div>
</div>
        
    </div>
    );
};

export default JobDetails;