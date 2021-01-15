import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className={'about__container'}>
            <h1>коротко о нас</h1>
            <p>
                Мы представляем вашему вниманию сайт на котором находиться 20 лучших фильмов 
            </p>
        </div>
    )
}

export default React.memo(About);