import React, {useState, createContext, useContext } from 'react';

const ProductContext = createContext();

export const ProductData = ({children}) => {
    const [product, setProduct] = useState({
        id: 578902,
        code: "578902-00",
        title: "Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale",
        rating: 4.6,
        price: [
            {currency: 'AED', value: 115050, pecies:{min: 10, max: 25}},
            {currency: 'US', value: 1145, pecies:{min: 10, max: 19}},
            {currency: 'US', value: 1145, pecies:{min: 50, max: null}}
        ],
        colors: ['black', 'red', 'green'],
        storage: [128,256,512]
    });

    return (
        <ProductContext.Provider value={
            {product, setProduct}
        }>
            {children}
        </ProductContext.Provider>
    )
}

// context hook
export const useProductData = ()=>useContext(ProductContext);

