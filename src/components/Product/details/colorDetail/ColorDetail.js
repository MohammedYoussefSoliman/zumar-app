import React from 'react';
import scss from '../../product.module.scss';

import blackImg from '../../../../Assets/images/color_1.png';
import redImg from '../../../../Assets/images/color_2.png';
import greenImg from '../../../../Assets/images/color_3.png';

const ColorDetail = () => {
    return (
        <div className={scss['product__details--content']}>
            <h2 className={scss['h2__txt']}>Availble color</h2>
            <div className={scss['detail']}>
                <div className={[scss['detail__opt'], scss['selected']].join(' ')}>
                    <img src={blackImg} alt="black"/>
                    <span className={scss['normal__txt']}>Black</span>
                </div>
                <div className={scss['detail__opt']}>
                    <img src={redImg} alt="red"/>
                    <span className={scss['normal__txt']}>Red</span>
                </div>
                <div className={scss['detail__opt']}>
                    <img src={greenImg} alt="green"/>
                    <span className={scss['normal__txt']}>Green</span>
                </div>
            </div>
        </div>
    )
}

export default ColorDetail;