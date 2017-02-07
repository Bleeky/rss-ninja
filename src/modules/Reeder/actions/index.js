import { addFeeds, deleteFeeds, fetchFeeds, setFeedsEntry } from './Feeds';
import cleanError from './cleanError';
import setError from './setError';
import { getBookmarks, bookmarkEntry, deleteBookmark } from './Bookmarks';
import { setFeedEntry, showIframe } from './FeedEntry';
import { resetFeed, fetchFeed } from './Feed';

export {
  addFeeds,
  bookmarkEntry,
  cleanError,
  deleteBookmark,
  deleteFeeds,
  fetchFeed,
  fetchFeeds,
  getBookmarks,
  resetFeed,
  setFeedsEntry,
  setFeedEntry,
  showIframe,
  setError,
};
