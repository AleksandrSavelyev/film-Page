import React from 'react';
import { Link }  from 'react-router-dom';
import './navbarStyle.css'

const NavBar = () => {
    return(
    <div className={'header'}>
        <div className={'header__buttons'}>
            <Link className={'header__link'} to='/'>Главная</Link>
        </div>
        <div className={'header__buttons'}>
            <Link className={'header__link'} to='/about'>О нас</Link>
        </div>
        <div className={'header__buttons'}>
            <Link className={'header__link'} to='/films'>Фильмы</Link>
        </div>
    </div>
    )
}

export default React.memo(NavBar);