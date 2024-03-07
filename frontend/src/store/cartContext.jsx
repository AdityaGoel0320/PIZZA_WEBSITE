import React, { useState, createContext, useContext, useReducer, useEffect } from "react";
import { CartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext();


let getLocalCartData = () => {
  let preSavedCart = localStorage.getItem("preSavedCart")
  if (preSavedCart == null) {
    return [];
  }
  else {
    return JSON.parse(preSavedCart);
  }
}
let initialState = {
  cart: getLocalCartData(),
  totalItem: 0,
  totalAmount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = ({ _id, name, image, size, price, quantity }) => {
    let CartArray = state.cart ? [...state.cart] : [];

    const existingItem = CartArray.find((item) => item._id === _id);

    if (existingItem) {
      // If the item already exists in the cart, update the quantity
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { _id, quantity: existingItem.quantity + quantity },
      });
    } else {
      // If the item is not in the cart, add it
      dispatch({ type: "ADD_TO_CART", payload: { _id, name, image, size, price, quantity } });
    }
  };

  let removeItem = (_id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: _id,
    });
  };

  let clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  let increment = (_id) => {
    return dispatch({
      type: "INCREMENT",
      payload: _id,
    });
  };

  let decrement = (_id) => {
    return dispatch({
      type: "DECREMENT",
      payload: _id,
    });
  };

  useEffect(() => {
    // Save the cart to local storage
    localStorage.setItem("preSavedCart", JSON.stringify(state.cart));

    // Log the current cart and local storage data for debugging
    console.log("Current Cart:", state.cart);
    console.log("Local Storage Data:", localStorage.getItem("preSavedCart"));

    // Dispatch action to get total
    dispatch({
      type: "GET_TOTAL",
    });
    console.log("Total Calculated");
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        cart: state.cart,
        removeItem,
        clearCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContextApi = () => {
  return useContext(CartContext);
};
