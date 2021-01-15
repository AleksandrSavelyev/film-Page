import React from 'react';
import './homePage.css';
import getRate from '../../REST/REST'
import FilmCarousel from './carusel/carusel.jsx'

export default class HomePage extends React.PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            posters: [],
        };
    }

    componentDidMount = () => {
        getRate().then(res => this.addPoster(res))
    }

    addPoster = filmsDb => {
        this.setState(()=> ({
            posters: filmsDb.films.map(item => (
                item.posterUrl
            ))
        }));
        this.savePosters();
    }

    savePosters = () => {
        this.props.sendPosters(this.state.posters)
    }

    render = () => {
        return(
            <div className={'home_page_wraper'}>
                <h1 children={'добро пожаловать на наш сайт'} />
                <div className={'carousel_wraper'}>
                    <FilmCarousel poster={this.props.poster} />
                </div>
            </div>
        );
    }
}