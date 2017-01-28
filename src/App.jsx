import React, { Component, PropTypes } from 'react';

import Login from './modules/Auth/Login/';
import Reeder from './modules/Reeder';

class App extends Component {
  static propTypes = {
    isLogged: PropTypes.bool,
    setToken: PropTypes.func,
    pingUser: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = localStorage.getItem('rssninjatoken');
    this.props.setToken(token);
    this.props.pingUser();
  }

  render() {
    if (!this.props.isLogged) {
      return (<Login />);
    }
    return (
      <div className="App">
        <Reeder />
      </div>
    );
  }
}

export default App;
