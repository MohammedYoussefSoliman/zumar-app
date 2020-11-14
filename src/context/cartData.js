import React, {useState, createContext, useContext } from 'react';

const CartContext = createContext();

export const CartData = ({children}) => {
    const [cart, setCart] = useState({
       products: null,
       totalQty: 3,
       totalPrice: 0
    });

    return (
        <CartContext.Provider value={
            {cart, setCart}
        }>
            {children}
        </CartContext.Provider>
    )
}

// context hook
export const useCartData = ()=>useContext(CartContext);

