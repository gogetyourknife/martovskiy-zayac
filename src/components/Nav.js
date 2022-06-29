import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <section className='navigation'>
            <ul className='navigation__wrapper'>
                <li className='navigation__link'>
                    <NavLink
                        to="/"
                        className='navigation__link'
                    >
                        Home
                    </NavLink>
                </li>
                <li className='navigation__link'>
                    <NavLink
                        to="/about"
                        className='navigation__link'
                    >
                        About
                    </NavLink>
                </li>
                <li className='navigation__link'>
                    <NavLink
                        to="/gallery"
                        className='navigation__link'
                    >
                        Gallery
                    </NavLink>
                </li>
            </ul>
            <ul className='navigation__contancts'>
                <li className='navigation__social'>
                    <a href='https://twitter.com/FrauMizantrop' target='_blank'></a>
                </li>
                <li className='navigation__social'>
                    <a href='https://www.patreon.com/Martovskiy_Zayac' target='_blank'></a>
                </li>
            </ul>
        </section>
    )
}

export default Nav;