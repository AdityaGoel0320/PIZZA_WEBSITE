import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContextApi } from '../store/cartContext';
import styles from '../components/ProductItem.module.css';

const Sample = ({ x }) => {
  const { _id, name, image, size, price } = x;

  const { addToCart } = useCartContextApi();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Check if any of the required values are undefined
    if (_id && name && image && size && price && quantity) {
      addToCart({ _id, name, image, size, price, quantity });
    } else {
      console.log("Some values are undefined. Cannot add to cart.");
    }
  };

  let fnc = () => {
    console.log(_id, name, image, size, price);
  };

  return (

    <>




    <div className={styles.card}>
      <div className={styles.bg}>
        <div className={`${styles.card} w-72 bg-base-100 shadow-2xl hover:shadow-black border rounded-5xl`}>
          <figure className="px-10 pt-10">
            <NavLink to={`/products/${_id}`}>
              <img src={image} alt="Shoes" className="xyz rounded-xl" />
            </NavLink>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{name}</h2>
            <p className="text-xl">
              <strong>Size:- </strong>
              {size}
            </p>
            <p className="text-xl">
              <strong>Rs:- </strong>
              {price}
            </p>
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="text-xl">
                <strong>Quantity:</strong>
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="text-md border-4  flex items-center justify-center gap-2 border-gray-300 rounded px-2 py-1 w-16"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="card-actions flex gap-16">
              <button onClick={fnc}>
                <i className={`btn btn-primary hover:bg-red-500 hover:text-white fa-regular fa-heart`}></i>
              </button>
              <button onClick={handleAddToCart} className="btn btn-primary hover:bg-red-500 hover:text-white">
                {/* <i className={`fa-solid fa-bag-shopping`}></i> */}
                <i className="  mr-1 fa-solid fa-cart-shopping"></i>

              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blob}></div>
    </div>

    </>

  );
};

export default Sample;
