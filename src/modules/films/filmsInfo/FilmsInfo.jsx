import './FilmsInfo.css';
import React from 'react';

const FilmComponent = props => {
    return (
        <div className={'filmContainer'}>
            <div className={'close_button_wraper'}>
                <span className={'close'} children={'X'} onClick={props.onClick} id={props.filmId}/>
            </div>
            <img className={'film_poster'} src={props.poster} />
            <span children={props.nameRu} />
            <span children={'год: '+props.year} />
            <span children={'оценка: '+props.rating} />
        </div> 
    )
}

export default React.memo(FilmComponent);