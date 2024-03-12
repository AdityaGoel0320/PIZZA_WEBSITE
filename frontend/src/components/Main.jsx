import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import { NavLink } from 'react-router-dom';
import CategoryArray from '../components/smallNavbar';
import arr from '../components/arr';
import Hero from '../components/Hero';
import AnimatedGradients from '../components/Animation';
import { useAuthContextApi } from '../store/auth';
import { backendUrl } from '../assets/FrontendUtils';

const Home = () => {

  const [newarr, setnewarr] = useState(arr)

  let uniqueSize = [
    ... new Set(
      arr.map((x) => {
        return x.size
      })
    ), "All"
  ]
  console.log(uniqueSize)

  let filterSize = (parameter) => {

    if (parameter === "All") {
      setnewarr(arr);
    }
    else {
      let x = arr.filter((x) => {
        return x.size === parameter;
      })
      console.log("erfgrg" + x)
      setnewarr(x);
      console.log(arr)
    }

  }



  const { isLoggedIn } = useAuthContextApi();

  console.log(backendUrl)


  console.log("isLoggedIn    " + isLoggedIn);




  return (
    <>

      <Hero />


      <h2 className='mt-12 text-center text-5xl '>Shop now and beat your   <strong> Hunger </strong> </h2>


      <CategoryArray uniqueSize={uniqueSize} filterSize={filterSize} />

      <ProductList arr={newarr} />

      <div className="m-12 h-24"></div>

      <footer className='font-bold text-3xl flex justify-center items-center gap-12'>
        <div className='flex items-center justify-center gap-5 m-5'>
          <a href="https://github.com/AdityaGoel0320" target="_blank" rel="noopener noreferrer" className='color-black'>
            <i id='i' className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aditya-goel-286245239" target="_blank" rel="noopener noreferrer" className='color-black'>
            <i id="i" className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/AdityaGoel0320?t=DWSov778bgHXMkyQxELrow&s=09" target="_blank" rel="noopener noreferrer" className='color-black'>
            <i id='i' className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="mailto:adityagoelofficial208@gmail.com"><i class="fa-regular fa-envelope"></i></a>

        </div>
      </footer>


    </>
  )
}

export default Home