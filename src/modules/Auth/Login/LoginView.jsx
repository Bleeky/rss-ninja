import React, { Component, PropTypes } from 'react';
import {
  Link,
} from 'react-router';


class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        Login
        <input type="text" onChange={(e) => { this.setState({ email: e.target.value }); }} />
        <input type="password" onChange={(e) => { this.setState({ email: e.target.value }); }} />
        Dont have an account ? Signup
        <Link to={'/signup'}>
          here.
        </Link>
      </div>
    );
  }
}

export default LoginView;
