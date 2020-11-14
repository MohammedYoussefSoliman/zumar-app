import React from 'react';
import scss from '../../product.module.scss';

const Quantity = () => {

    return (
        <div className={scss['product__details--content']}>
        <h2 className={scss['h2__txt']}>Quantity <span className={scss['red']}>$12,000</span></h2>
        <div className={scss['quantity']}>
            <div className={scss['quantity__btn--group']}>
                <button className={scss['quantity--btn']}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.125 10.625L17.125 7.375L10.625 7.375L10.625 0.875L7.375 0.875L7.375 7.375L0.875 7.375L0.875 10.625L7.375 10.625L7.375 17.125L10.625 17.125L10.625 10.625L17.125 10.625Z" fill="#082933"/>
                        </svg>
                </button>
                <button className={scss['quantity--btn']}>
                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="17.125" y="0.375" width="3.25" height="16.25" transform="rotate(90 17.125 0.375)" fill="#082933"/>
                    </svg>
                </button>
            </div>
            <span className={scss['normal__txt']}>51 peices</span>
        </div>
    </div>
    )
}

export default Quantity