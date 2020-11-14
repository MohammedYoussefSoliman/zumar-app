import React from 'react';
import NumberFormat from 'react-number-format';
import scss from '../../product.module.scss';

const Price = () => {
    return (
        <div className={[scss['product__details--content'], scss['price']].join(' ')}>
            <div className={scss['price__content']}>
                <small className={[scss['small__light__txt'], scss['black']].join(' ')}>10 - 25 Pieces</small>
                <NumberFormat className={[scss['h1__txt'], scss['block']].join(' ')} value={115020.001} displayType={'text'} thousandSeparator={true} prefix={'AED'} decimalScale={2} />
            </div>
            <div className={scss['price__content']}>
                <small className={[scss['small__light__txt'], scss['black']].join(' ')}>10-19 Pieces</small>
                <NumberFormat className={[scss['h1__txt'], scss['block']].join(' ')} value={1145.001} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
            </div>
            <div className={scss['price__content']}>
                <small className={[scss['small__light__txt'], scss['black']].join(' ')}>50+ Pieces</small>
                <NumberFormat className={[scss['h1__txt'], scss['block']].join(' ')} value={1145.001} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'} />
            </div>
        </div>
    )
}

export default Price