import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ReederView from './ReederView';

import { logout } from '../Auth/Login/actions';
import {
  addRss,
  bookmarkEntry,
  cleanError,
  deleteBookmark,
  deleteRss,
  fetchRss,
  fetchRsses,
  getBookmarks,
  resetFeed,
  setFeed,
} from './actions';

const mapStateToProps = state => ({
  bookmarkedEntries: state.reeder.bookmarkedEntries,
  currentFeed: state.reeder.currentFeed,
  error: state.reeder.error,
  feed: state.reeder.feed,
  feeds: state.reeder.feeds,
  fetchingRss: state.reeder.fetchingRss,
  fetchingRsses: state.reeder.fetchingRsses,
  loggedUser: state.auth.username,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addRss,
  bookmarkEntry,
  cleanError,
  deleteBookmark,
  deleteRss,
  fetchRss,
  fetchRsses,
  getBookmarks,
  logout,
  resetFeed,
  setFeed,
}, dispatch);

const ReederContainer = connect(mapStateToProps, mapDispatchToProps)(ReederView);

export default ReederContainer;
