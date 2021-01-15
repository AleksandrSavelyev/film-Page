import './Films.css';
import React from 'react';
import getRate from '../../REST/REST';
import FilmComponent from './filmsInfo/FilmsInfo.jsx'

export default class Films extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        };
    }

    componentDidMount = () => {
        getRate().then(res => this.saveInfo(res))
    }

    saveInfo = filmsDB => {
        this.setState(()=> ({
            films: filmsDB.films,
        }));
        this.save();
    }
    
    save = () => {
        this.props.sendFilms(this.state.films);
    }

    click = event => {
        this.props.closeCard(event.target.id);
    }
    
    render = () => {
        return(
        <div className={'all_films_wraper'}>
            {
                this.props.filmsState.map((item, index) => (
                    !item.isClosed? <FilmComponent
                        key={index}
                        filmId={item.filmId}
                        nameRu={item.nameRu}
                        year={item.year}
                        poster={item.posterUrl}
                        rating={item.rating}
                        onClick={this.click}
                    />: null
                ))
            }
        </div>
        )
    }
}