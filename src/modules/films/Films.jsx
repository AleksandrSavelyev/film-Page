import React from 'react';
import getRate from '../../REST/REST';
import FilmComponent from './FilmsInfo'
import './Films.css';

export default class Films extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        };
        this.init();
    }
    
    init =() => {
        
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
        console.log(this.props.filmsState)   
    }
    
    render = () => {
        return(
        <div className={'cont'}>
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