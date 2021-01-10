import React, { Suspense } from 'react';
import HomePage from '../homePage/HomePage';
import Films from '../films';
import About from '../about/About'
import NavBar from '../navBar/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const MainPage = () => {
    return (
        <Router>
                <Suspense fallback={<div>Страница загружается...</div>}>
                    <NavBar/>
                    <div className={'curr_page'}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/> 
                            <Route path="/about" component={About}/>
                            <Route path="/films" component={Films}/>
                        </Switch>
                    </div>
                </Suspense>
            </Router>
    );
}

export default React.memo(MainPage);