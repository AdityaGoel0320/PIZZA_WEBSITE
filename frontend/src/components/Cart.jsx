import React, { useState } from 'react';
import { useCartContextApi } from '../store/cartContext';
import ItemCart from './ItemCart';


import { loadStripe } from '@stripe/stripe-js';
import { backendUrl } from '../assets/FrontendUtils';


const Cart = () => {
  const { cart, totalItem,  totalAmount, shipping_fee, addToCart, removeItem, clearCart, increment, decrement } =
    useCartContextApi();

  // console.log("xzcdfdsf   +  "  + cart, totalItem, totalAmount, shipping_fee, addToCart, removeItem, clearCart, increment, decrement);

  const [cartData, setcartData] = useState(cart)
  console.log("cart is printing")
  console.log(cart)
  console.log("cart is done for payment")


  // Define the function to make the payment
  let makePayment = async () => {
    try {
      console.log("Make payment function started...");

      console.log("cartData is v :  " + cartData)

      // Load Stripe.js asynchronously
      const stripe = await loadStripe("pk_test_51PAB7OSHK6BpruzqY5A4kNIw4sBvcfXvFg2FsxZaoV8mwz44lacafqkenQMiqYaV5aTNlALKJ1PYNWK5xis9Xm0v00fn9lipwy");
      // Prepare the request body
      const body = {
        products: cart // Assuming cartData contains your array of products
      };

      // Define request headers
      const headers = {
        "Content-Type": "application/json"
      };

      // Define the URL for the backend endpoint
      const url = `${backendUrl}/api/create-checkout-session`;

      // Make a POST request to create a Checkout Session on the server
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      // Parse the response as JSON
      const session = await response.json();

      // Redirect to Checkout using the session ID returned from the server
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      // Handle any errors during redirection
      if (result.error) {
        console.error("Error redirecting to Checkout:", result.error);
        throw new Error("Error redirecting to Checkout");
      }

      console.log("Payment done.");
      if (result.success) {
        // Dispatch action to clear the cart
        dispatch({ type: "CLEAR_CART" });
      }

    } catch (error) {
      console.error("Error making payment:", error);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  };



  return (
    <>

      <section className='main-cart-section p-4'>
        <h1 className="text-3xl font-bold mb-4">Thanks for adding in Shopping Cart</h1>
        <p className="total-items text-xl mb-2">You have <span className='font-bold'>{totalItem}</span> items in your cart </p>

        <div className="cart-items">
          <div className="cart-items-container ">
            {cart.map((x) => {
              let { _id, name, image, size, price, quantity } = x;

              return (
                <ItemCart
                  key={_id}
                  id={_id}
                  title={name}
                  price={price}
                  img={image}
                  quantity={quantity}
                  description={size} // Assuming size is your description
                />
              );
            })}
          </div>
        </div>

        <div className="flex justify-around gap-12 items-center flex-col">
          <h3 className="text-xl font-bold ">Cart total: <span className="text-black font-bold text-2xl">{totalAmount} rs</span></h3>

          <div className='flex justify-around items-center w-full'>

            <button className="mt-2 text-2xl  bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 font-bold  " onClick={() => makePayment()}>Checkout</button>
            <button
              className="mt-2 font-bold  bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 text-2xl"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </section>

      <div className="h-72">

      </div>
    </>
  );
};

export default Cart;
