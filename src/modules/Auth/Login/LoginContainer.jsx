import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginView from './LoginView';
import { login } from './actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
}, dispatch);

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default LoginContainer;
