import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignupView from './SignupView';

import signup from './actions';

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
}, dispatch);

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignupView);

export default SignupContainer;
