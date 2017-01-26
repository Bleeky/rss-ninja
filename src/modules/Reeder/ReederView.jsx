import React, { Component, PropTypes } from 'react';
import ReactModal from 'react-modal';

class ReederView extends Component {
  static propTypes = {
    logout: PropTypes.func,
    fetchRsses: PropTypes.func,
    fetchRss: PropTypes.func,
    addRss: PropTypes.func,
    deleteRss: PropTypes.func,
    cleanError: PropTypes.func,
    feeds: PropTypes.arrayOf(PropTypes.shape()),
    feed: PropTypes.shape(),
    currentFeed: PropTypes.number,
    error: PropTypes.string,
    fetchingRss: PropTypes.bool,
    fetchingRsses: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      url: '',
      name: '',
      currentFeedEntry: null,
      feedsFilter: '',
      itemsFilter: '',
    };
    this.handleOpenModal = ::this.handleOpenModal;
    this.handleCloseModal = ::this.handleCloseModal;
    this.handleAddRss = ::this.handleAddRss;
  }

  componentWillMount() {
    this.props.fetchRsses();
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

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleAddRss(e) {
    e.preventDefault();
    this.props.addRss({
      name: this.state.name,
      url: this.state.url,
    });
    this.handleCloseModal();
  }

  renderFeedsList() {
    return (
      <div className="feeds">
        <div className="search">
          <input placeholder="Search" onChange={(e) => { this.setState({ feedsFilter: e.target.value }); }} />
          <button onClick={this.handleOpenModal} className="add">Add</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="modal"
            overlayClassName="overlay"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <form>
              <input type="text" placeholder="name" onChange={(e) => { this.setState({ name: e.target.value }); }} />
              <input type="text" placeholder="url" onChange={(e) => { this.setState({ url: e.target.value }); }} />
              <button type="submit" onClick={this.handleAddRss}>Add Rss</button>
            </form>
          </ReactModal>
        </div>
        <div className="list-contents">
          {this.props.fetchingRsses &&
            <div className="element" >Loading</div>
          }
          {this.props.feeds && this.props.feeds.map((feed, key) => {
            if (feed.name.toLowerCase().includes(this.state.feedsFilter.toLowerCase())) {
              return (
                <a
                  key={key} onClick={() => {
                    document.getElementById('webview').style.display = 'none';
                    this.setState({ currentFeedEntry: null });
                    this.props.fetchRss(feed.id);
                  }}
                >
                  <div className={`element ${feed.id === this.props.currentFeed ? 'active' : ''}`} >
                    {feed.name}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        this.props.deleteRss(feed.id);
                      }}
                    >-</button>
                  </div>
                </a>
              );
            }
            return null;
          },
          )}
        </div>
      </div>
    );
  }

  renderFeedItems() {
    return (
      <div className="feed">
        <div className="search">
          <input placeholder="Search" onChange={(e) => { this.setState({ itemsFilter: e.target.value }); }} />
        </div>
        <div className="list-contents">
          {this.props.fetchingRss &&
            <div className="element" >Loading</div>
          }
          {this.props.feed.items && this.props.feed.items.map((item, key) => {
            if (item.title.toLowerCase().includes(this.state.itemsFilter.toLowerCase())) {
              return (
                <div
                  key={key} className={`element ${item.link === this.state.currentFeedEntry ? 'active' : ''}`} onClick={() => {
                    document.getElementById('loadingWebview').style.display = 'block';
                    document.getElementById('webview').style.display = 'block';
                    this.setState({ currentFeedEntry: item.link });
                  }}
                >
                  <div className="title">
                    {item.title}
                  </div>
                </div>
              );
            }
            return null;
          },
        )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div id="snackbar">
          {this.props.error}
        </div>
        <button className="logout" onClick={this.props.logout}>Logout</button>
        {this.renderFeedsList()}
        {this.renderFeedItems()}
        <div className="content">
          <div id="loadingWebview" className="loadingWebview">LOADING</div>
          <iframe
            id="webview"
            src={this.state.currentFeedEntry}
            className="webview"
            onLoad={() => {
              document.getElementById('loadingWebview').style.display = 'none';
            }}
          />
        </div>
      </div>
    );
  }
}

export default ReederView;
