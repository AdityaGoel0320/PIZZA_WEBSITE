import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Products from './pages/Products';
import Home from './pages/Main';
import Cart from './pages/Cart';
import About from './pages/About';
import SingleItemPage from './pages/SingleItemPage';
import BottomNav from './components/BottomNav';
import ErrorPage from './pages/ErrorPage';
import Sample from './components/Sample';
import CircleWithCompanion from './components/Icon';


import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AboutPage from './pages/AboutPage';
import { backendUrl } from './assets/FrontendUtils';
import Logout from './pages/Logout';
import ContactPage from './pages/ContactPage';
import SocialLinks from './components/Social';


export const UserContext = createContext();
export const FavContext = createContext();

const App = () => {


  return (
    <>


<SocialLinks/>
      <BottomNav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:_id" element={<SingleItemPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />

        <Route exact path="*" element={<ErrorPage />} />
      </Routes>



      {/* <VideoBackground /> */}







      {/* <CircleWithCompanion/> */}

    </>
  )
}

export default App