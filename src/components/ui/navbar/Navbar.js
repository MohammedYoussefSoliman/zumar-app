import React from 'react';

import {NavLink} from 'react-router-dom';
import scss from './navbar.module.scss';

const Navbar = () => {

    return (
        <nav className={scss['nav']}>
        <ul className={scss['nav__list']}>
            <li className={scss['nav__list--item']}>
                <NavLink to="/services" className={scss['menu__txt']} activeClassName={scss['active']}>services</NavLink>
            </li>
            <li className={scss['nav__list--item']}>
                <NavLink to='/orders' className={scss['menu__txt']} activeClassName={scss['active']}>orders</NavLink>
            </li>
            <li className={scss['nav__list--item']}>
                <NavLink to='/account' className={scss['menu__txt']} activeClassName={scss['active']}>account</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar