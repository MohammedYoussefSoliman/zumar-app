import React from 'react';
import scss from '../../product.module.scss';

const Storage = () => {

    return (
        <div class="product__details--content storage" className={[scss['product__details--content'], scss['storage']].join(' ')}>
            <h2 className={scss['h2__txt']}>Storage capacity</h2>
            <div className={scss['detail']}>
                <div className={scss['detail__opt']}>
                    <p className={scss['h1__txt']}>128</p>
                    <small className={[scss['small__light__txt'], scss['black']].join(' ')}>GB</small>
                </div>
                <div className={[scss['detail__opt'], scss['selected']].join(' ')}>
                    <p className={scss['h1__txt']}>256</p>
                    <small className={[scss['small__light__txt'], scss['black']].join(' ')}>GB</small>
                </div>
                <div className={scss['detail__opt']}>
                    <p className={scss['h1__txt']}>512</p>
                    <small className={[scss['small__light__txt'], scss['black']].join(' ')}>GB</small>
                </div>
            </div>
        </div>
    )
}

export default Storage