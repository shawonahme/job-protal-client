import React, { useContext, useEffect, useState } from 'react';
import { JobProvider } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import UseAxios from '../hooks/UseAxios';

const MyApplication = () => {
    const {user} = useContext(JobProvider)
    const [apply,setApply] = useState([])
    const useAxios = UseAxios()
    

    const handleDelete =(id)=>{

        fetch(`http://localhost:5000/myApppDel/${id}`,{
            method:'DELETE'
        })
        .then(res=>{
            res.json()
        })
        .then(data=>{
            const remaining = apply.filter(data => data._id !== id)
            setApply(remaining)
            alert('delete successfully')
        })
        .catch(error=>{

        })
    }

    useEffect(()=>{
        // fetch(`http://localhost:5000/my-application?email=${user.email}`)
        // .then(res=> res.json())
        // .then(data=>{
        //     setApply(data)
        // })

        // axios.get(`http://localhost:5000/my-application?email=${user.email}`,{withCredentials:true})
        // .then(data=>   setApply(data.data))
        useAxios.get(`my-application?email=${user.email}`)
        .then(data=>   setApply(data.data))
      
    },[])
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
{ apply.map((post,index)=>
<tr key={post._id}>
<th>{index+1}</th>
<td>{post.hr_name}</td>
<td>{post.title}</td>
<td>{post.company}</td>
<td>{post.location}</td>
<td>{post.applicationDeadline}</td>
<td>
    <button onClick={()=>handleDelete(post._id)} className='bg-red-600 py-1 px-4 text-white font-bold rounded-md mx-2'>X</button>
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

export default MyApplication;