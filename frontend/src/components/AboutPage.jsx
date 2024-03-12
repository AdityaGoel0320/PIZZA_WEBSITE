import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContextApi } from '../store/auth';

const AboutPage = () => {
  const { userLoginedData } = useAuthContextApi();

  return (
    <>

      <h2 className="text-5xl text-center mt-4 font-bold mb-4">HI THANK YOU FOR LOGIN IN YOUR PIZZA PARADISE</h2>

      <div className="  p-4  m-24  flex text-3xl  flex-col  justify-center items-center  backdrop-blur-lg">

        <div className='flex items-center justify-center gap-4'>

          <h3 className="    font-semibold">Email:</h3>
          <p>{userLoginedData.email}</p>
        </div>

        <div className='flex items-center justify-center gap-4'>


          <h3 className="    font-semibold">Phone:</h3>
          <p>{userLoginedData.phone}</p>
        </div>


        <div className='flex items-center justify-center gap-4'>


          <h3 className="    font-semibold">Name:</h3>
          <p>{userLoginedData.username}</p>
        </div>

      </div>


        <NavLink to="/logout" className=" p-2 rounded-xl border-4 border-black font-bold text-xl bg-red-500  text-white hover:text-black">
          Want to logout  <i class="fa-solid fa-right-from-bracket"></i>
        </NavLink>



        
    </>
  );
};

export default AboutPage;
