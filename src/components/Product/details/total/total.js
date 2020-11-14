import React from 'react';
import scss from '../../product.module.scss';
import phoneIcon from '../../../../Assets/images/phone.svg';
const Total = () => {
    return (
        <div className={[scss['product__details--content'], scss['total']].join(' ')}>
            <div className={scss['total--title']}>
                <h2 className={scss['h2__txt']}>Total</h2>
                <span className={[scss['h1__txt'], scss['green']].join(' ')}>$12,100</span>
            </div>
            <div className={scss['total--btn--group']}>
                <button className={[scss['total--btn'], scss['btn__txt'], scss['btn__success']].join(' ')}>Place order now</button>
                <button className={[scss['total--btn'], scss['btn__txt'], scss['btn__primary']].join(' ')}>
                    <img src={phoneIcon} alt=""/>
                    <span>Call us</span>
                </button>
                <button class="total--btn small__light__txt btn__trans" className={[scss['total--btn'], scss['small__light__txt'], scss['btn__trans']].join(' ')}>
                    <span>We are 24/7 available</span>
                </button>
            </div>
        </div>
    )
}

export default Total