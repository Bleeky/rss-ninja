import React, { Component, PropTypes } from 'react';

class SignupView extends Component {
  static propTypes = {
    isLogged: PropTypes.bool,
    signup: PropTypes.func,
    cleanError: PropTypes.func,
    error: PropTypes.string,
    router: PropTypes.shape(),
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.signup = ::this.signup;
  }

  componentWillMount() {
    if (this.props.isLogged) {
      this.props.router.transitionTo('/');
      return false;
    }

    return true;
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

  componentDidUpdate() {
    if (this.props.isLogged) {
      this.props.router.transitionTo('/');
    }
  }

  signup(e) {
    e.preventDefault();
    this.props.signup({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="loginView">
        <form className="loginForm">
          <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }); }} />
          <input type="password" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }); }} />
          <button type="submit" className="loginBtn" onClick={this.signup}>Signup</button>
        </form>
        <div id="snackbar">
          {this.props.error}
        </div>
      </div>
    );
  }
}

export default SignupView;
