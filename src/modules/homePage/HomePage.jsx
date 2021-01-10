import React from 'react';
import './homePage.css';

const HomePage = () => {
   return(
        <div className={'homePageWraper'}>
            <h1 children={'добро пожаловать на наш сайт'} />
        </div>
   );
}

export default React.memo(HomePage);