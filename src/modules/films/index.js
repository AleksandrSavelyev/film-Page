import Component from './Films.jsx';
import * as actions from './Actions.js';
import * as selectors from './Selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    filmsState: selectors.getFilms(state),
});

const mapDispatchToProps = dispatch => ({
    sendFilms: payload => dispatch(actions.saveFilms(payload)),
    closeCard: payload => dispatch(actions.closeCard(payload)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Component);