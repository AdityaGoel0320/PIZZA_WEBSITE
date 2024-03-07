// ItemCart.jsx
import React from 'react';
import { useCartContextApi } from '../store/cartContext';

const ItemCart = ({ id, title, price, img, quantity, description }) => {
    const { removeItem, increment, decrement } = useCartContextApi();

    return (
        <div className=" flex flex-wrap justify-between  backdrop-blur-sm p-4 border-black border-4 m-4">
            <div className='flex flex-wrap justify-center items-center gap-4 text-left'>

                <img src={img} alt={title} className="w-20 h-20 rounded-full " />

                <div className='text-lg'>


                    <h2 className="">{title}</h2>
                    <p className=""> <strong>Size :- </strong>  {description}</p>
                    <p><strong>Price :- </strong>{price} rs</p>
                    <p><strong>Quantity :- </strong> {quantity}</p>
                </div>
            </div>

            <div className="flex items-center justify-around gap-2  w-72">


                <div className=''>

                    <button
                        // className="bor/der-4 border-black"
                        onClick={() => decrement(id)}
                    >
                        <i className="fas fa-minus"></i>
                    </button>

                    <input
                        type="text"
                        className="w-12 h-8 ml-2 mr-2 text-center border-2 border-black rounded"
                        // className='w-12 h-12 text-center  border-2 border-black rounded-2xl'
                        value={quantity} // Convert quantity to a number

                        readOnly
                    />


                    <button
                        // className="text-gray-600 hover:text-gray-800 ml-2"
                        // className='border-4 border-black'
                        onClick={() => increment(id)}
                    >
                        <i className="fas fa-plus"></i>
                    </button>


                </div>



                <h3 className='font-bold text-xl'>{price * quantity} rs</h3>

                <button onClick={() => removeItem(id)} className="text-red-600 hover:text-red-800">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

export default ItemCart;
