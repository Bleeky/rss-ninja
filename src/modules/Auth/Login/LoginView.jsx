import React, { Component, PropTypes } from 'react';
import {
  Link,
} from 'react-router';


class LoginView extends Component {
  static propTypes = {
    login: PropTypes.func,
    cleanError: PropTypes.func,
    error: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.login = ::this.login;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.error) {
      const x = document.getElementById('snackbar');
      x.className = 'show';
      setTimeout(() => {
        x.className = x.className.replace('show', '');
        this.props.cleanError();
      }, 3000);
    }
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
        <form>
          <input type="text" onChange={(e) => { this.setState({ email: e.target.value }); }} />
          <input type="password" onChange={(e) => { this.setState({ password: e.target.value }); }} />
          <button type="submit" onClick={this.login}>Login</button>
        </form>
        Dont have an account ? Signup
        <Link to={'/signup'}>
          here.
        </Link>
        <div id="snackbar">
          {this.props.error}
        </div>
      </div>
    );
  }
}

export default LoginView;
