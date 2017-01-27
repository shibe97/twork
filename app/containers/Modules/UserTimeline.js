import { connect } from 'react-redux';
import Timeline from '../../components/Modules/Timeline/Timeline';
import { requestGetUserTimeline } from '../../actions/timeline';
import { setUser } from '../../actions/user';
import { requestPostFavoritesCreate, requestPostFavoritesDestroy } from '../../actions/favorites';
import { openRetweetModal } from '../../actions/retweet';
import { requestGetUsersShow } from '../../actions/users';

const mapStateToProps = state => ({
  gettingTimeline: state.userTimelineReducer.gettingTimeline,
  timeline: state.userTimelineReducer.timeline,
  user: state.userReducer.user,
  userModal: state.userReducer.modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestGetTimeline() {
    dispatch(requestGetUserTimeline(ownProps.params.userId));
  },
  requestPostFavoritesCreate(tweetId) {
    dispatch(requestPostFavoritesCreate(tweetId));
  },
  requestPostFavoritesDestroy(tweetId) {
    dispatch(requestPostFavoritesDestroy(tweetId));
  },
  setUser(user) {
    dispatch(setUser(user));
  },
  openRetweetModal(tweet) {
    dispatch(openRetweetModal(tweet));
  },
  requestGetUsersShow(id) {
    dispatch(requestGetUsersShow(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
