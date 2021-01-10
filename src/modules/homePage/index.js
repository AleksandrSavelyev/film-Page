import Component from './HomePage';
import * as selectors from './Selectors';
import * as actions from './Action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    poster: selectors.getFilms(state),
});

const mapDispatchToProps = dispatch => ({
    sendPosters: payload => dispatch(actions.savePosters(payload)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Component);