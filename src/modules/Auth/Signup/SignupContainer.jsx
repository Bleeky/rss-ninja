import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignupView from './SignupView';

import signup from './actions';

const mapStateToProps = state => ({
  authReducer: state.authReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
}, dispatch);

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignupView);

export default SignupContainer;
