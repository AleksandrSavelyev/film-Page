import React from 'react';
import './FilmsInfo.css'

const FilmComponent = props => {
    return (
        <div className={'filmContainer'}>
            <div className={'close_button_wraper'}>
                <span className={'close'} children={'X'} onClick={props.onClick} id={props.filmId}/>
            </div>
            <img src={props.poster} />
            <span children={props.nameRu} />
            <span children={'год: '+props.year} />
            <span children={'оценка: '+props.rating} />
        </div> 
    )
}

export default React.memo(FilmComponent);