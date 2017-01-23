import React, { Component, PropTypes } from 'react';

class ExampleView extends Component {
  static propTypes = {
    message: PropTypes.string,
    example: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Welcome to my boilerplate ! {this.props.message}</div>
        <button onClick={this.props.example}>Update here.</button>
      </div>
    );
  }
}

export default ExampleView;
