import React, { Component, PropTypes } from 'react';

import FeedsContainer from './Feeds';
import FeedContainer from './Feed';
import FeedEntryContainer from './FeedEntry';

class ReederView extends Component {
  static propTypes = {
    cleanError: PropTypes.func,
    error: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    return (
      <div>
        <div className="container">
          <div id="snackbar">
            {this.props.error}
          </div>
          <FeedsContainer />
          <FeedContainer />
          <FeedEntryContainer />
        </div>
      </div>
    );
  }
}

export default ReederView;
