import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContextApi } from '../store/auth';
import { useCartContextApi } from '../store/cartContext';

const BottomNav = () => {
  const [fixedNav, setFixedNav] = useState(false);


  const { totalItem } = useCartContextApi() ; 


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedNav(scrollPosition >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const { isLoggedIn } = useAuthContextApi()




  return (

    <>
    {
       (isLoggedIn) ? (
        <>
        <div
          className={`btm-nav bg-black text-white border-4 border-white w-96 flex justify-center items-center fixed ${fixedNav ? 'top-0' : 'bottom-0'
            } left-0 right-0 mx-auto p-4 rounded-3xl backdrop-blur-3xl`}
          style={{ zIndex: 10000000 }}
        >
          <button className='text-white'>
  
            <NavLink to="/"><i class=" mr-1 fa-solid fa-house"></i>Home</NavLink>
          </button>
          <button className='text-white'>
  
            <NavLink to="/contact"><i class="  mr-1 fa-solid fa-message"></i>Contact</NavLink>
          </button>
  
  
          <button className='text-white'>
            <NavLink to="/cart">
  
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <i class="  mr-1 fa-solid fa-cart-shopping"></i>
                  <span className=" text-black bg-white badge badge-xs badge-primary indicator-item  rounded-3xl">
                    {totalItem}
                  </span>
                </div>
              </button>
  
            </NavLink>
          </button>
          <button className='text-white'>
            <a href="/about"><i class="  mr-1 fa-solid fa-user"></i>Account</a>
          </button>
         
        </div>
  
        </>
       ) : (
        <>
        <div
          className={`btm-nav bg-black text-white border-4 border-white w-96 flex justify-center items-center fixed ${fixedNav ? 'top-0' : 'bottom-0'
            } left-0 right-0 mx-auto p-4 rounded-3xl backdrop-blur-3xl`}
          style={{ zIndex: 10000000 }}
        >
          <button className='text-white'>
  
            <NavLink to="/"><i class=" mr-1 fa-solid fa-house"></i>Home</NavLink>
          </button>
          <button className='text-white'>
  
            <NavLink to="/contact"><i class="  mr-1 fa-solid fa-message"></i>Contact</NavLink>
          </button>
  


          <button className='text-white'>
            <NavLink to="/login">
  
             Login
  
            </NavLink>
          </button>
          <button className='text-white'>
            <NavLink to="/register">Register</NavLink>
          </button>
         
  
         
        </div>
  
  
        </>
       )
  
    }




    </>
  );
};

export default BottomNav;
