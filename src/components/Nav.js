import React from 'react';
import { NavLink } from "react-router-dom";

import paint from '../images/paint.png';

function Nav() {

    function useWindowSize() {
        const [width, setWidth] = React.useState(window.screen.width);
        React.useEffect(() => {
            const handleResize = () => {
                setWidth(window.screen.width)
            }
            window.addEventListener('resize', handleResize)
        }, []);
        return width
    }

    const width = useWindowSize();


    return (
        <section className={width >= 426 ? 'navigation navigation-active' : 'navigation navigation-hide'}>
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
                        to="/gallery"
                        className='navigation__link'
                    >
                        Gallery
                    </NavLink>
                </li>
                <li className='navigation__link'>
                    <NavLink
                        to="/prices"
                        className='navigation__link'
                    >
                        Prices
                    </NavLink>
                </li>
            </ul>
            <div className='navigation__block'>
                <ul className='navigation__contancts'>
                    <li className='navigation__social'>
                        <a href='https://twitter.com/FrauMizantrop' target='_blank' className='navigation__social_icon navigation__social_twitter'></a>
                    </li>
                    <li className='navigation__social'>
                        <a href='https://www.patreon.com/Martovskiy_Zayac' target='_blank' className='navigation__social_icon navigation__social_patreon'></a>
                    </li>
                    <li className='navigation__social'>
                        <a href='https://zayacv.tumblr.comsss' target='_blank' className='navigation__social_icon navigation__social_tumblr'></a>
                    </li>
                    <li className='navigation__social'>
                        <a href='https://boosty.to/martovskiy_zayac' target='_blank' className='navigation__social_icon navigation__social_insta'></a>
                    </li>
                    <li className='navigation__social'>
                        <a href='https://boosty.to/martovskiy_zayac' target='_blank' className='navigation__social_icon navigation__social_boosty'></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Nav;