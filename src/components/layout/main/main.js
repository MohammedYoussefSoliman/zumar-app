import React from 'react';
import scss from './main.module.scss';

import Breadcrumb from '../../Breadcrumb/breadcrumb';
import Product from '../../Product/product';

const Main = () => {

    return (
        <div className={scss['container']}>
            <Breadcrumb />
            <Product />
        </div>
    )
}

export default Main