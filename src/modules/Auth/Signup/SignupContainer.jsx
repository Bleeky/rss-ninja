import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignupView from './SignupView';

import signup from './actions';
import { cleanError } from '../../Reeder/actions';

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  cleanError,
}, dispatch);

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignupView);

export default SignupContainer;
