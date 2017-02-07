import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FeedEntryView from './FeedEntryView';

import { logout } from '../../Auth/Login/actions';
import {
  showIframe,
} from '../actions';

const mapStateToProps = state => ({
  feedEntry: state.feedEntryReducer.feedEntry,
  iframeVisible: state.feedEntryReducer.iframeVisible,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  showIframe,
  logout,
}, dispatch);

const FeedEntryContainer = connect(mapStateToProps, mapDispatchToProps)(FeedEntryView);

export default FeedEntryContainer;
