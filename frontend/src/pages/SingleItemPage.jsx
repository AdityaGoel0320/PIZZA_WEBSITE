import React from 'react';
import arr from '../components/arr';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const SingleItemPage = () => {
    const navigate = useNavigate();
    const param = useParams();
    let selectedItemIndex = arr.findIndex(item => item._id === param._id);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
        <button className="md:mb-4 rounded-3xl p-4 bg-red-500 text-white shadow-2xl">
        <NavLink to="/" className="hover:underline">Go back</NavLink>
    </button>
        <div className="flex flex-col items-center justify-center ">
           

            {selectedItemIndex !== -1 && (
                <div className=" grid md:grid-cols-12  ">
                    <div className="m-6 md:col-span-4 flex items-center justify-center">
                        <img src={arr[selectedItemIndex].image} alt={arr[selectedItemIndex].name} className="w-72 h-72 rounded-lg" />
                    </div>

                    <div className="md:col-span-8 mt-4 p-12 mb-12">
                        <h3 className="text-2xl font-bold">{arr[selectedItemIndex].name}</h3>
                        <span className="block mt-2 text-gray-600">
                            <h4 className="text-lg">Size: <span className="font-semibold">{arr[selectedItemIndex].size}</span></h4>
                        </span>

                        <p className="mt-4 text-gray-800">{arr[selectedItemIndex].description}</p>

                        <div className="flex  gap-12 items-center mt-4 space-x-4">
                            <h3 className="text-2xl font-bold text-green-600">Rs. {arr[selectedItemIndex].price}</h3>
                            <button className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>

    );
};

export default SingleItemPage;
