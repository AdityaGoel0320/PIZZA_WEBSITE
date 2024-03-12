import React from 'react';
import { useCartContextApi } from '../store/cartContext';
import ItemCart from './ItemCart';

const Cart = () => {
  const { cart, totalItem, totalAmount, shipping_fee, addToCart, removeItem, clearCart, increment, decrement } =
    useCartContextApi();

  console.log(cart);

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

            <button className="mt-2 text-2xl  bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 font-bold  ">Checkout</button>
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
