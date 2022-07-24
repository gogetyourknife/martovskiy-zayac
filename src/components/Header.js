import React from 'react';
import sidebar_active from '../images/sidebar_active.png';
import sidebar_noactive from '../images/sidebar_active.png';

function Header() {
    return (
        <header className='header'>
            <div className='sidebar'></div>
            <div className='header__background'></div>
            <h1 className='header__title'>Welcome!</h1>
            <p className='header__subtitle'>I'm Martovskiy Zayac, a freelance artist</p>
        </header>
    )
}

export default Header;