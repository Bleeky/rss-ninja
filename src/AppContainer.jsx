import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // getuser,
}, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
