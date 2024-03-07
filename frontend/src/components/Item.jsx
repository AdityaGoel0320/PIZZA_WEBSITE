import React from 'react'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let {
        _id, name, image, size, price
    } = props;
    return (
        <>


            {/* <div className="card w-72 bg-base-100 shadow-2xl hover:shadow-green-900 border rounded-5xl">
                <figure className="px-10 pt-10">
                    <NavLink to={`/products/${_id}`}>

                        <img  src={image} alt="Shoes" className=" xyz rounded-xl" />
                    </NavLink>

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p> <strong>Size:- </strong>{size} </p>
                    <p> <strong>Rs:- </strong>{price} </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div> */}



            



        </>
    )
}

export default Item