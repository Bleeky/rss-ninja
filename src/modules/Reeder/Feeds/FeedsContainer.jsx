import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FeedsView from './FeedsView';

import {
  addFeeds,
  deleteRss,
  fetchFeed,
  fetchFeeds,
  getBookmarks,
  resetFeed,
  setFeedsEntry,
  setFeedEntry,
  showIframe,
} from '../actions';

const mapStateToProps = state => ({
  currentFeedsEntry: state.feedReducer.currentFeedsEntry,
  bookmarkedEntries: state.bookmarksReducer.bookmarkedEntries,
  fetchingFeeds: state.feedsReducer.fetchingFeeds,
  feeds: state.feedsReducer.feeds,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addFeeds,
  setFeedEntry,
  deleteRss,
  fetchFeed,
  fetchFeeds,
  getBookmarks,
  resetFeed,
  setFeedsEntry,
  showIframe,
}, dispatch);

const FeedsContainer = connect(mapStateToProps, mapDispatchToProps)(FeedsView);

export default FeedsContainer;
