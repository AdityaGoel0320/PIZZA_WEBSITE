import { createContext, useContext, useState, useEffect } from "react";
import { backendUrl } from "../assets/FrontendUtils";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {

    let favArr = [1, 2, 3, , 5];


    const [favoriteItems, setFavoriteItems] = useState([]);

    const toggleFavorite = (itemId) => {
        setFavoriteItems((prevItems) =>
            prevItems.includes(itemId)
                ? prevItems.filter((id) => id !== itemId)
                : [...prevItems, itemId]
        );
        console.log(favoriteItems)
    };
    return <FavContext.Provider value={{ favArr  , favoriteItems , toggleFavorite }}>
        {children}
    </FavContext.Provider>
}



export const useFavContextApi = () => {
    return useContext(FavContext);
}