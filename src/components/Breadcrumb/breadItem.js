import React from 'react';
import scss from './breadcrumb.module.scss';

const BreadItem = ({bread}) => {
    return (
    <li className={scss['breadcrumb__list--item']}>
        <a href="" className={scss['small__light__txt']}>{bread}</a>
    </li>
    )
}

export default BreadItem