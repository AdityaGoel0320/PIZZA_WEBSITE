import React from 'react';

const SocialLinks = () => {
  return (
    <div className='fixed top-20 right-0 m-5 flex flex-col items-center justify-center gap-5   z-[9999999999999]'>
      <a href="https://github.com/AdityaGoel0320" target="_blank" rel="noopener noreferrer" className='text-white bg-black rounded-full p-2'>
        <i id='i' className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/aditya-goel-286245239" target="_blank" rel="noopener noreferrer"
      
       className='text-white bg-black rounded-full p-2'>
        <i id="i" className="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="https://twitter.com/AdityaGoel0320?t=DWSov778bgHXMkyQxELrow&s=09" target="_blank" rel="noopener noreferrer" 
      className='text-white bg-black rounded-full p-2'>
        <i id='i' className="fa-brands fa-x-twitter"></i>
      </a>
      <a href="mailto:adityagoelofficial208@gmail.com"   className='text-white bg-black rounded-full p-2' ><i className="fa-regular fa-envelope"></i></a>
    </div>
  );
};

export default SocialLinks;
