import React from 'react';
import scss from './product.module.scss';

import Preview from './preview/Preview';
import Details from './details/details';

const Product = () => {

    return (
        <div className={scss['product']}>
            <Preview />
            <Details />
        </div>
    )
}

export default Product