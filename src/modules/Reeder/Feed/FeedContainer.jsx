import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FeedView from './FeedView';

import {
  setFeedEntry,
  showIframe,
  deleteBookmark,
  bookmarkEntry,
} from '../actions';

const mapStateToProps = state => ({
  bookmarkedEntries: state.bookmarksReducer.bookmarkedEntries,
  feed: state.feedReducer.feed,
  fetchingFeed: state.feedReducer.fetchingFeed,
  feedEntry: state.feedEntryReducer.feedEntry,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setFeedEntry,
  showIframe,
  deleteBookmark,
  bookmarkEntry,
}, dispatch);

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedView);

export default FeedContainer;
