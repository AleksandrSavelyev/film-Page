import constants from '../constants/constants';

const initialState = {
    films: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.SAVE_FILMS:
            return {
                ...state,
                films: action.payload 
        };

        case constants.CLOSE_CARD:
            return {
                films:
                state.films.map(item => item.filmId == action.payload ?{...item, isClosed: true}:item)
            }

        default:
            return state;
    }
}