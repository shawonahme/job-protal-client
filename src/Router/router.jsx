import {
    createBrowserRouter,
   
  }
   from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Register from "../authVerification/Register";
import Login from "../authVerification/Login";
import Bannar from "../assets/allComponents/Bannar";
import HomeLayout from "../Pages/HomeLayout";
import JobDetails from "../assets/allComponents/JobDetails";
import AllJobs from "../Pages/AllJobs";
import PrivateRouter from "./PrivateRouter";
import AddJob from "../Pages/AddJob";
import MyPostsJob from "../Pages/MyPostsJob";
import MyApplication from "../Pages/MyApplication";
import ApplyJob from "../assets/allComponents/ApplyJob";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<HomeLayout></HomeLayout>
        },
        {
          path:'/all-jobs',
          element: <PrivateRouter><AllJobs></AllJobs></PrivateRouter>
        },
        {
          path: '/addjobs',
          element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
        },
        {
            path:'/myApplication',
            element: <PrivateRouter><MyApplication></MyApplication></PrivateRouter>
        },

        {
              path:'/Applicant/:id',
              element: <PrivateRouter><ApplyJob></ApplyJob></PrivateRouter>,
              loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },

        {
          path: '/myPostsJob',
          element: <PrivateRouter> <MyPostsJob></MyPostsJob></PrivateRouter>
        }
        ,
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

  export default router