import React from 'react';
import Rating from '@material-ui/lab/Rating';
import scss from '../../product.module.scss';

const Ratings = ({rate}) => {
    return (
        <div className={[scss['product__details--content'], scss['rating']].join(' ')}>
            <span className={scss['light__txt']}>Product Code:  578902-00</span>
            <Rating className={scss['stars']} value={rate} precision={0.2} readOnly/>
            <span className={scss['light__txt']}>
                <span className={scss['black']}>{rate}</span>(200)
            </span>
        </div>
    )
}

export default Ratings