import constants from '../../constants/constants';

export const savePosters = payload => ({
    type: constants.SAVE_POSTERS,
    payload,
});