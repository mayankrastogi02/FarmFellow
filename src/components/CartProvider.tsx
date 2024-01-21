import React from "react";
import { CartContext } from "../utils/globalData";

export function CartProvider({ children }) {
    const [cart, setCart] = React.useState([]);

    function addToCart(product) {
        console.log("Adding to cart");
        console.log(product);
        setCart((oldCart) => [...oldCart, product]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}