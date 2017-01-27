import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ReederView from './ReederView';

import { logout } from '../Auth/Login/actions';
import {
  fetchRsses,
  addRss,
  fetchRss,
  cleanError,
  deleteRss,
  resetFeed,
} from './actions';

const mapStateToProps = state => ({
  feeds: state.reeder.feeds,
  feed: state.reeder.feed,
  currentFeed: state.reeder.currentFeed,
  error: state.reeder.error,
  fetchingRss: state.reeder.fetchingRss,
  fetchingRsses: state.reeder.fetchingRsses,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  fetchRsses,
  fetchRss,
  addRss,
  deleteRss,
  cleanError,
  resetFeed,
}, dispatch);

const ReederContainer = connect(mapStateToProps, mapDispatchToProps)(ReederView);

export default ReederContainer;
