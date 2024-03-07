import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './store/cartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
