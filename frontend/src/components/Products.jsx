import React, { useState } from 'react';
import ProductList from './ProductList';
import CategoryArray from './smallNavbar';
import arr from './arr';
import AnimatedGradients from './Animation';


import { useFavContextApi } from '../store/fav'

const Products = () => {


  const { toggleFavorite} = useFavContextApi() ; 


  const [newarr, setnewarr] = useState(arr);

  let uniqueSize = [
    ...new Set(
      arr.map((x) => {
        return x.size;
      })
    ),
    'All',
  ];

  let filterSize = (parameter) => {
    if (parameter === 'All') {
      setnewarr(arr);
    } else {
      let x = arr.filter((x) => {
        return x.size === parameter;
      });
      setnewarr(x);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* <AnimatedGradients/> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <h1 className="flex justify-center items-center text-white">Products</h1>
        <CategoryArray uniqueSize={uniqueSize} filterSize={filterSize} />
        <ProductList arr={newarr}   />
      </div>
      {/* <AnimatedGradients/> */}
    </div>
  );
};

export default Products;
