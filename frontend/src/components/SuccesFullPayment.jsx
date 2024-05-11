import React, { useEffect } from 'react';
import { useCartContextApi } from '../store/cartContext';
import { NavLink, useNavigate } from "react-router-dom"


const SuccesFullPayment = () => {
  const { clearCart } = useCartContextApi();
  let navigate = useNavigate();

  useEffect(() => {
    // Clear the cart upon component mount (upon successful payment)
    clearCart();
  }, []);

  const goToHome = () => {
    // Navigate to the home page
    navigate("/");

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Payment Successful!</h1>
      <img src="./images/paymentSuccess.gif" alt=""  className='w-32'/>

      <p className="text-lg text-gray-700 mb-8">Your order will be processed shortly.</p>

      <button
        onClick={goToHome}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SuccesFullPayment;
