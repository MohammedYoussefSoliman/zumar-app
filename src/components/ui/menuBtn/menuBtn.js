import React from 'react';
import menuIcon from '../../../Assets/images/menu.svg';
import scss from './menuBten.module.scss';

const MenuBtn = () => {

    return (
        <div className={scss['menu']}>
            <img src={menuIcon} alt="menu drawer"/>
        </div>
    )
}

export default MenuBtn