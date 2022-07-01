import React from 'react';

import paint from '../images/paint.png';
import phone from '../images/phone.png';
import speed from '../images/speedometer.png';
import heart from '../images/heart.png';


function Main() {

    return (
        <section className='main'>
            <section className='info'>
                <h2 className='info__title'>About me</h2>
                <p className='info__subtitle'>Something about me</p>
                <ul className='info__cards'>
                    <li className='info__card'>
                        <img className='card__image' src={paint} alt="paint brush"></img>
                        <h3 className='card__title'>In digital</h3>
                        <p className='card__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </li>
                    <li className='info__card'>
                        <img className='card__image' src={phone} alt="Phone ringing"></img>
                        <h3 className='card__title'>In touch</h3>
                        <p className='card__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </li>
                    <li className='info__card'>
                        <img className='card__image' src={speed} alt="Speedometer"></img>
                        <h3 className='card__title'>In time</h3>
                        <p className='card__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </li>
                    <li className='info__card'>
                        <img className='card__image' src={heart} alt="Heart"></img>
                        <h3 className='card__title'>With love</h3>
                        <p className='card__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </li>
                </ul>
            </section>
            <div className='block__pink'></div>
        </section>
    )
}

export default Main;