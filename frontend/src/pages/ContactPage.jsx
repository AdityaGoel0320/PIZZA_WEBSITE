import React, { useEffect, useState } from 'react';
import { backendUrl } from '../assets/FrontendUtils';


import { ToastContainer, toast } from 'react-toastify';


import { useAuthContextApi } from '../store/auth';

const ContactPage = () => {
  const [contactDefaultData, setcontactDefaultData] = useState({
    username: '',
    email: '',
    message: '',
  });
  const { userLoginedData } = useAuthContextApi();
  const [userData, setuserData] = useState(true);

  if (userData && userLoginedData) {
    setcontactDefaultData({
      username: userLoginedData.username,
      email: userLoginedData.email,
      message: '',
    });
    setuserData(false);
  }

  let handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setcontactDefaultData((prevcontactDefaultData) => ({
      ...prevcontactDefaultData,
      [name]: value,
    }));
  };

  let sendContactData = async (e) => {
    e.preventDefault();

    let { username, email, message } = contactDefaultData;

    let url = `${backendUrl}/api/form/contact`;
    try {
      let res = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, message }),
      });

      let data = await res.json();
      if (!data) {
        alert('Message not sent');
      } else {
        // alert('Message sent successfully');
        toast.success("messsage sent succesfull",
        {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );

      }
    } catch (error) {
      // console.error(error);


      // window.alert('Network Error: Unable to reach the server.');


      toast.error("messsage not sent",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      } ) 

      
    }
  };

  return (
    <>


      <div className="flex  flex-col justify-center items-center gap-4  p-12">

        <h1 className='font-bold text-5xl'>

          Contact us


        </h1>

        <h3 className='font-bold text-xl'>
          We'd love to talk about how we can help you.

        </h3>


        <form
          onSubmit={sendContactData}
          className=" border-2  border-gray-500 p-4 backdrop-blur-md w-96"
        >

          <input
            type="text"
            placeholder="Username"
            name="username"
            required={true}
            value={contactDefaultData.username}
            onChange={handleInputs}
            className="w-full p-2 mb-4 border border-black rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            required={true}
            value={contactDefaultData.email}
            onChange={handleInputs}
            className="w-full p-2 mb-4 border b border-black rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
          />

          <textarea
            rows="5"
            placeholder="Type your message"
            name="message"
            required={true}
            value={contactDefaultData.message}
            onChange={handleInputs}
            className="w-full p-2 mb-4 border border-black  rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition-all duration-300"
          >
            Submit Contact Form
          </button>
        </form>
      </div>





      
    </>
  );
};

export default ContactPage;
