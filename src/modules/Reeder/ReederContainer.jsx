import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ReederView from './ReederView';

import { logout } from '../Auth/Login/actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

const ReederContainer = connect(mapStateToProps, mapDispatchToProps)(ReederView);

export default ReederContainer;
