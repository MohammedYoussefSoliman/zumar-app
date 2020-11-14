import React from 'react';
import scss from '../../product.module.scss';

const Shipping = () => {
    return (
        <div className={scss['product__details--content']}>
            <h2 className={scss['h2__txt']}>Shipping <span className={scss['red']}>$100</span></h2>
            <div className={[scss['detail'], scss['shipping']].join(' ')}>
                <div className={scss['detail__opt']}>
                    <span className={scss['normal__txt']}>Free</span>
                    <span className={scss['small__light__txt']}>Estimated 15 - 30 days</span>
                </div>
                <div className={[scss['detail__opt'], scss['selected']].join(' ')}>
                    <span className={scss['normal__txt']}>Fast</span>
                    <span className={scss['small__light__txt']}>Estimated 5 - 7 days</span>
                </div>
                <div className={scss['detail__opt']}>
                    <span className={scss['normal__txt']}>Rocket</span>
                    <span className={scss['small__light__txt']}>Estimated 2 - 5 days</span>
                </div>
            </div>
        </div>
    )
}

export default Shipping