import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class FeedView extends Component {
  static propTypes = {
    fetchingFeed: PropTypes.bool,
    setFeedEntry: PropTypes.func,
    showIframe: PropTypes.func,
    feedEntry: PropTypes.shape(),
    feed: PropTypes.shape(),
    bookmarkedEntries: PropTypes.arrayOf(PropTypes.shape()),
    deleteBookmark: PropTypes.func,
    bookmarkEntry: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      itemsFilter: '',
    };
  }

  renderBookmark(item) {
    const bookmark = this.props.bookmarkedEntries.find(
      bookmarkEntry => bookmarkEntry.link === item.link,
    );
    return bookmark ?
      <div className="bookmark-solid icon" onClick={() => { this.props.deleteBookmark(bookmark.id); }} /> :
      <div className="bookmark icon" onClick={() => { this.props.bookmarkEntry(item); }} />;
  }

  render() {
    return (
      <div className="feed">
        <div className="topBar softgrey">
          <input type="text" placeholder="Search" onChange={(e) => { this.setState({ itemsFilter: e.target.value }); }} />
        </div>
        <div className="list-contents">
          {this.props.fetchingFeed &&
            <div className="element" >Loading</div>
          }
          {this.props.feed.items && this.props.feed.items.map((item, key) => {
            if (item.title.toLowerCase().includes(this.state.itemsFilter.toLowerCase())) {
              return (
                <div
                  key={key} className={`element ${item.link === this.props.feedEntry.link ? 'active' : ''}`} onClick={() => {
                    this.props.setFeedEntry(item);
                    this.props.showIframe(false);
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
}

export default FeedView;
