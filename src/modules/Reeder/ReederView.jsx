import React, { Component, PropTypes } from 'react';
import ReactModal from 'react-modal';
import moment from 'moment';

class ReederView extends Component {
  static propTypes = {
    addRss: PropTypes.func,
    bookmarkedEntries: PropTypes.arrayOf(PropTypes.shape()),
    bookmarkEntry: PropTypes.func,
    cleanError: PropTypes.func,
    currentFeed: PropTypes.number,
    deleteBookmark: PropTypes.func,
    deleteRss: PropTypes.func,
    error: PropTypes.string,
    feed: PropTypes.shape(),
    feeds: PropTypes.arrayOf(PropTypes.shape()),
    fetchingRss: PropTypes.bool,
    fetchingRsses: PropTypes.bool,
    fetchRss: PropTypes.func,
    fetchRsses: PropTypes.func,
    getBookmarks: PropTypes.func,
    logout: PropTypes.func,
    resetFeed: PropTypes.func,
    setFeed: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      url: '',
      name: '',
      currentFeedEntry: {},
      feedsFilter: '',
      itemsFilter: '',
      showIframe: false,
    };
    this.handleOpenModal = ::this.handleOpenModal;
    this.handleCloseModal = ::this.handleCloseModal;
    this.handleAddRss = ::this.handleAddRss;
  }

  componentWillMount() {
    this.props.fetchRsses();
    this.props.getBookmarks();
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
        <div className="topBar green">
          <button onClick={this.handleOpenModal} className="add">Add +</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="modal"
            overlayClassName="overlay"
            onRequestClose={this.handleCloseModal}
          >
            <div className="modal-title">Add a new feed</div>
            <button className="modalBtn" onClick={this.handleCloseModal}>x</button>
            <form className="modalForm">
              <input type="text" placeholder="name" onChange={(e) => { this.setState({ name: e.target.value }); }} />
              <input type="text" placeholder="url" onChange={(e) => { this.setState({ url: e.target.value }); }} />
              <button type="submit" className="submitRssBtn" onClick={this.handleAddRss}>ADD</button>
            </form>
          </ReactModal>
        </div>
        <div className="list-contents feedList">
          {this.props.fetchingRsses &&
            <div className="element" >Loading</div>
          }
          {this.props.feeds && this.props.feeds.map((feed, key) => (
            <a
              key={key} onClick={() => {
                this.setState({ currentFeedEntry: {} });
                this.props.resetFeed();
                this.props.fetchRss(feed.id);
              }}
            >
              <div className={`feedEntry ${feed.id === this.props.currentFeed ? 'active' : ''}`} >
                <div className="feedContainer">
                  <div className="feedName">
                    {feed.name}
                  </div>
                  <div className="feedActions">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        this.props.deleteRss(feed.id);
                        if (feed.id === this.props.currentFeed) {
                          this.setState({ currentFeedEntry: {}, showIframe: false });
                        }
                      }}
                    >
                      <div className="trash icon" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
              ),
          )}
        </div>
        <div className="list-contents user">
          <div
            className={`userContent ${this.props.currentFeed === -1 ? 'active' : ''}`} onClick={() => {
              this.setState({ currentFeedEntry: {} });
              this.props.resetFeed();
              this.props.setFeed(this.props.bookmarkedEntries, -1);
            }}
          >Bookmarks</div>
        </div>
      </div>
    );
  }

  renderBookmark(item) {
    const bookmark = this.props.bookmarkedEntries.find(
      bookmarkEntry => bookmarkEntry.link === item.link,
    );
    return bookmark ?
      <div className="bookmark-solid icon" onClick={() => { this.props.deleteBookmark(bookmark.id); }} /> :
      <div className="bookmark icon" onClick={() => { this.props.bookmarkEntry(item); }} />;
  }

  renderFeedItems() {
    return (
      <div className="feed">
        <div className="topBar softgrey">
          <input type="text" placeholder="Search" onChange={(e) => { this.setState({ itemsFilter: e.target.value }); }} />
        </div>
        <div className="list-contents">
          {this.props.fetchingRss &&
            <div className="element" >Loading</div>
          }
          {this.props.feed.items && this.props.feed.items.map((item, key) => {
            if (item.title.toLowerCase().includes(this.state.itemsFilter.toLowerCase())) {
              return (
                <div
                  key={key} className={`element ${item.link === this.state.currentFeedEntry.link ? 'active' : ''}`} onClick={() => {
                    this.setState({ currentFeedEntry: item, showIframe: false });
                    document.getElementById('loadingWebview').style.display = 'none';
                  }}
                >
                  <div className="bookmark">
                    {this.renderBookmark(item)}
                  </div>
                  <div className="date">
                    {moment(item.date_published).format('MMM Do YYYY, h:mma')}
                  </div>
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
      <div>
        <div className="container">
          <div id="snackbar">
            {this.props.error}
          </div>
          {this.renderFeedsList()}
          {this.renderFeedItems()}
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
            {Object.keys(this.state.currentFeedEntry).length !== 0 && !this.state.showIframe &&
              <div className="preview">
                <div
                  dangerouslySetInnerHTML={{ __html: this.state.currentFeedEntry.description }}
                />
                <button
                  className="previewWebSourceBtn"
                  onClick={() => {
                    this.setState({ showIframe: true });
                    document.getElementById('loadingWebview').style.display = 'flex';
                  }}
                >Show web-source</button>
              </div>
            }
            {this.state.showIframe &&
              <iframe
                id="webview"
                src={this.state.currentFeedEntry.link}
                className="webview"
                onLoad={() => {
                  document.getElementById('loadingWebview').style.display = 'none';
                  document.getElementById('webview').style.display = 'block';
                }}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ReederView;
