import React, {useState} from 'react';
import {useCartData} from '../../context';
import scss from './bag.module.scss';
import bag from '../../Assets/images/bag.svg';

const CartBag = () => {
    const {cart, setCart} = useCartData();
    const [loaded, setLoaded] = useState(true)
    return (
        <div className={scss['bag']}>
            <img src={bag} />
            {loaded && <span className={scss['bag__qty']}>{cart.totalQty}</span>}
        </div>
    )
}

export default CartBag