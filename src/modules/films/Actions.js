import constants from '../../constants/constants';

export const saveFilms = payload => ({
    type: constants.SAVE_FILMS,
    payload,
});

export const closeCard = payload => ({
    type: constants.CLOSE_CARD,
    payload,
})