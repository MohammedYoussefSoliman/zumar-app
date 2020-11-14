import React from 'react';
import scss from './header.module.scss';

//components
import Logo from '../../logo/logo';
import Search from '../search/Search'
import Navbar from '../../ui/navbar/Navbar';
import CartBag from '../../CartBag/CartBag';
import MenuBtn from '../../ui/menuBtn/menuBtn';

const Header = () => {
    return (
        <header className={scss['header-wrapper']}>
            <div className={[scss['header'], scss['container']].join(' ')}>
                <Logo />
                <Search />
                <Navbar />
                <CartBag />
                <MenuBtn />
            </div>
        </header>
    )
}

export default Header