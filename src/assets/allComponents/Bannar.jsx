import React from 'react';
import  team1 from  '../../assets/team1.jpg';
import  team2 from '../../assets/team2.jpg';
import { easeOut, motion } from "framer-motion";



const Bannar = () => {
    return (
        <div>
           <div className='grid lg:grid-cols-2 items-center gap-12 w-11/12 mx-auto my-12'>
            <div>
                <h2 className='text-4xl font-semibold leading-snug pb-3'>The Easiest Way <br />
                to Get Your New Job</h2>
                
                <p className='leading-8'>Each month, more than 3 million job seekers turn to
website in their search for work, making over 140,000
applications every single day</p>
            </div>
            <div className='flex flex-col'>
            <motion.img
                        src={team1}
                        animate={{ y: [50, 75, 50] }}
                        transition={{duration: 10, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
                    <motion.img src={team2} className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl'
                     animate={{x:[120,160,120]}}
                     transition={{duration: 15, delay:5 , repeat: Infinity}}
                      alt="" />
            </div>

           </div>
        </div>
    );
};

export default Bannar;