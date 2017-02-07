import React, { Component, PropTypes } from 'react';

class FeedEntryView extends Component {
  static propTypes = {
    feedEntry: PropTypes.shape(),
    iframeVisible: PropTypes.bool,
    showIframe: PropTypes.func,
    logout: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <div className="topBar">
          <button className="logout" onClick={this.props.logout}>
            Logout
          </button>
        </div>
        <div id="loadingWebview" className="loadingWebview">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
        {Object.keys(this.props.feedEntry).length !== 0 && !this.props.iframeVisible &&
          <div className="preview">
            <div
              dangerouslySetInnerHTML={{ __html: this.props.feedEntry.description }}
            />
            <button
              className="previewWebSourceBtn"
              onClick={() => {
                this.props.showIframe(true);
                document.getElementById('loadingWebview').style.display = 'flex';
              }}
            >Show web-source</button>
          </div>
        }
        {this.props.iframeVisible &&
          <iframe
            id="webview"
            src={this.props.feedEntry.link}
            className="webview"
            onLoad={() => {
              document.getElementById('loadingWebview').style.display = 'none';
              document.getElementById('webview').style.display = 'block';
            }}
          />
        }
      </div>
    );
  }
}

export default FeedEntryView;
