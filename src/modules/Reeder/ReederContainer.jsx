import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ReederView from './ReederView';

import { logout } from '../Auth/Login/actions';
import {
  cleanError,
} from './actions';

const mapStateToProps = state => ({
  error: state.reeder.error,
  loggedUser: state.auth.username,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  cleanError,
  logout,
}, dispatch);

const ReederContainer = connect(mapStateToProps, mapDispatchToProps)(ReederView);

export default ReederContainer;
