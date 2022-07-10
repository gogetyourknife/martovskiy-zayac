import React from 'react';
import images from '../utils/images'

function Card() {

    return (
        <section className='pic'>
            <h2 className='pic__title'>See more in gallery</h2>
            <div class='pic__wrapper'>
                {images.map((img) => (
                    <img src={img} alt='art' className='pic__image' />
                ))}
            </div>
        </section>
    )
}

export default Card;