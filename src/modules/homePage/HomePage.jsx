import React from 'react';

const HomePage = () => {
   return(
        <div className={'homePageWraper'}>
            <h1 children={'WELCOM TO FILMS PAGE'} />
        </div>
   );
}

export default React.memo(HomePage);