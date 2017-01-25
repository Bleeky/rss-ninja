import React, { Component, PropTypes } from 'react';
import {
  Link,
} from 'react-router';


class LoginView extends Component {
  static propTypes = {
    login: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.login = ::this.login;
  }

  login(e) {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        Login
        <input type="text" onChange={(e) => { this.setState({ email: e.target.value }); }} />
        <input type="password" onChange={(e) => { this.setState({ password: e.target.value }); }} />
        <button onClick={this.login}>Login</button>
        Dont have an account ? Signup
        <Link to={'/signup'}>
          here.
        </Link>
      </div>
    );
  }
}

export default LoginView;
