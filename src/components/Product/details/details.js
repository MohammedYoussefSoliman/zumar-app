import React from 'react';
import Ratings from './rating/rating';
import Price from './price/price';
import ColorDetail from './colorDetail/ColorDetail';
import Storage from './storage/storage';
import scss from '../product.module.scss';
import Quantity from './quantity/quantity';
import Shipping from './Shipping/Shipping';
import Total from './total/total';

const Details = ()=> {
    return (
        <div className={scss['product__details']}>
            <h1 className={scss['h1__txt']}>Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale</h1>
            <Ratings rate={4.6} />
            <Price />
            <ColorDetail />
            <Storage />
            <Quantity />
            <Shipping />
            <Total />
        </div>
    )
}

export default Details