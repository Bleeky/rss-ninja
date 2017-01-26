import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginView from './LoginView';
import { login } from './actions';
import { cleanError } from '../../Reeder/actions';

const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  cleanError,
}, dispatch);

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default LoginContainer;
