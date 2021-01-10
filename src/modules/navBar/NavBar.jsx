import React from 'react';
import { Link }  from 'react-router-dom';

const NavBar = () => {
    return(
    <div className={'header'}>
        <div>
            <Link to='/'>home page</Link>
        </div>
        <div>
            <Link to='/about'>about</Link>
        </div>
        <div>
            <Link to='/films'>films</Link>
        </div>
    </div>
    )
}

export default React.memo(NavBar);