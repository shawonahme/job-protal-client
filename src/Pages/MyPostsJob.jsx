import React, { useContext, useEffect, useState } from 'react';
import { JobProvider } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import UseAxios from '../hooks/UseAxios';

const MyPostsJob = () => {
    const {user} = useContext(JobProvider)
    const [postData,setPostData] = useState([])
    const useAxios = UseAxios()

    useEffect(()=>{

        // fetch(`http://localhost:5000/myPostsJob?email=${user.email}`)
        // .then(res=> res.json())
        // .then(data=>{
        //     setPostData(data)

        // })

        // axios.get(`http://localhost:5000/myPostsJob?email=${user.email}`,{withCredentials:true})
        // .then(data=> setPostData(data.data))
        useAxios.get(`myPostsJob?email=${user.email}`)
        .then(data=> setPostData(data.data))

    },[user.email])
    return (
        <div>
          
           
                <div className="overflow-x-auto min-h-screen">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>title</th>
        <th>company</th>
        <th>location</th>
        <th> dead line</th>
        <th>action </th>
      </tr>
    </thead>
    <tbody>
    { postData.map((post,index)=>
      <tr>
        <th>{index+1}</th>
        <td>{post.hr_name}</td>
        <td>{post.title}</td>
        <td>{post.company}</td>
        <td>{post.location}</td>
        <td>{post.applicationDeadline}</td>
        <td>
            <button className='bg-red-600 py-1 px-4 text-white font-bold rounded-md mx-2'>X</button>
            <button  className='bg-yellow-500 py-1 px-4 text-white font-bold rounded-md mx-2'>edit</button>
        </td>
      </tr>
     
    )
}
     
      
    </tbody>
   
  </table>
</div>
           
        </div>
    );
};

export default MyPostsJob;