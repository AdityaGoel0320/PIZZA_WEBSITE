export const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { _id, name, image, size, price , quantity } = action.payload;

      let CartArray = state.cart ? [...state.cart] : [];

  
      return {
        ...state,
        cart: [...CartArray, action.payload],
      };
    }


    if (action.type === "UPDATE_QUANTITY") {
      let CartArray = state.cart ? [...state.cart] : [];
    
      const updatedCart = CartArray.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    
      return { ...state, cart: updatedCart };
    }
    
  
    if (action.type === "REMOVE_ITEM") {
        console.log("remove item reducer clicked")
      let CartArray = state.cart ? [...state.cart] : [];

      return {
        ...state,
        cart: CartArray.filter((x) => {
          return x._id !== action.payload;
        }),
      };
    }
  
    if (action.type === "CLEAR_CART") {

        console.log("Dsafdsfdfgdjsgudsgfugf")
        console.log("Dsafdsfdfgdjsgudsgfugf")
        console.log("Dsafdsfdfgdjsgudsgfugf")
        console.log("Dsafdsfdfgdjsgudsgfugf")
        console.log("Dsafdsfdfgdjsgudsgfugf")
      let CartArray = state.cart ? [...state.cart] : [];

      return {
        ...state,
        cart: [],
      };
    }
  

    if (action.type === "INCREMENT") {
      let CartArray = state.cart ? [...state.cart] : [];

      let updatedCart = CartArray.map((x) => {
        if (x._id === action.payload) {
          return { ...x, quantity: x.quantity + 1 };
        }
        return x;
      });
  
      return { ...state, cart: updatedCart };
    }
  
    if (action.type === "DECREMENT") {

      let CartArray = state.cart ? [...state.cart] : [];

        console.log("dec item reducer clicked");
      
        let updatedCart = CartArray.map((x) => {
          if (x._id === action.payload) {
            // Ensure the quantity doesn't go below 1
            const newQuantity = Math.max(x.quantity - 1, 1);
            return { ...x, quantity: newQuantity };
          }
          return x;
        });
      
        return { ...state, cart: updatedCart };
      }
      
  
    if (action.type === "GET_TOTAL") {
      let CartArray = state.cart ? [...state.cart] : [];

      let { totalItem, totalAmount } = CartArray.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
          let updatedTotalAmount = price * quantity;
          accum.totalAmount = accum.totalAmount + updatedTotalAmount;
          accum.totalItem = accum.totalItem + quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
  
    return state;
  };
  