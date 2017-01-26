import React, { Component, PropTypes } from 'react';

class SignupView extends Component {
  static propTypes = {
    isLogged: PropTypes.bool,
    signup: PropTypes.func,
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
      // browserHistory.push('/');
      this.props.router.transitionTo('/');
      return false;
    }

    return true;
  }

  componentDidUpdate() {
    if (this.props.isLogged) {
      // browserHistory.push('/');
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
      <div>
        <form>
          <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }); }} />
          <input type="password" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }); }} />
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default SignupView;
