import React, { Component, PropTypes } from 'react';
import ReactModal from 'react-modal';

class FeedsView extends Component {
  static propTypes = {
    getBookmarks: PropTypes.func,
    fetchFeeds: PropTypes.func,
    resetFeed: PropTypes.func,
    fetchFeed: PropTypes.func,
    addFeeds: PropTypes.func,
    setFeedEntry: PropTypes.func,
    deleteFeeds: PropTypes.func,
    setFeedsEntry: PropTypes.func,
    showIframe: PropTypes.func,
    bookmarkedEntries: PropTypes.arrayOf(PropTypes.shape()),
    fetchingFeeds: PropTypes.bool,
    feeds: PropTypes.arrayOf(PropTypes.shape()),
    currentFeedsEntry: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
    };

    this.handleOpenModal = ::this.handleOpenModal;
    this.handleCloseModal = ::this.handleCloseModal;
    this.handleAddRss = ::this.handleAddRss;
  }

  componentWillMount() {
    this.props.fetchFeeds();
    this.props.getBookmarks();
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleAddRss(e) {
    e.preventDefault();
    this.props.addFeeds({
      name: this.state.name,
      url: this.state.url,
    });
    this.handleCloseModal();
  }

  render() {
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
          {this.props.fetchingFeeds &&
            <div className="element" >Loading</div>
          }
          {this.props.feeds && this.props.feeds.map((feed, key) => (
            <a
              key={key} onClick={() => {
                this.props.setFeedEntry({});
                this.props.resetFeed();
                this.props.fetchFeed(feed.id);
              }}
            >
              <div className={`feedEntry ${feed.id === this.props.currentFeedsEntry ? 'active' : ''}`} >
                <div className="feedContainer">
                  <div className="feedName">
                    {feed.name}
                  </div>
                  <div className="feedActions">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        this.props.deleteFeeds(feed.id);
                        if (feed.id === this.props.currentFeedsEntry) {
                          this.props.setFeedEntry({});
                          this.props.showIframe(false);
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
            className={`userContent ${this.props.currentFeedsEntry === -1 ? 'active' : ''}`} onClick={() => {
              this.props.setFeedEntry({});
              this.props.resetFeed();
              this.props.setFeedsEntry(this.props.bookmarkedEntries, -1);
            }}
          >Bookmarks</div>
        </div>
      </div>
    );
  }
}

export default FeedsView;
