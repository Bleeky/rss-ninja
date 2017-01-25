import React, { Component, PropTypes } from 'react';

import Login from './modules/Auth/Login/';
import Reeder from './modules/Reeder';

class App extends Component {
  static propTypes = {
    isLogged: PropTypes.bool,
    // setToken: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = localStorage.getItem('rssninjatoken');
    console.log(token);
    // this.props.setToken(token);
  }

  render() {
    // if (!this.props.isLogged) {
    //   return (<Login />);
    // }
    return (
      <div className="App">
        <Reeder />
      </div>
    );
  }
}

export default App;
