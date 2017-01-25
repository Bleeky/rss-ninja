import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from './App';

import { setToken, pingUser } from './modules/Auth/actions';

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setToken,
  pingUser,
}, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
