import { connect } from 'react-redux';
import Timeline from '../../components/Modules/Timeline/Timeline';
import { requestGetMentionsTimeline } from '../../actions/timeline';
import { requestGetUsersShow } from '../../actions/users';
import { requestGetSearchTweets } from '../../actions/search';

const mapStateToProps = state => ({
  gettingTimeline: state.mentionsTimelineReducer.gettingTimeline,
  timeline: state.mentionsTimelineReducer.timeline,
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
  requestGetTimeline() {
    dispatch(requestGetMentionsTimeline());
  },
  requestGetUsersShow(id) {
    dispatch(requestGetUsersShow(id));
  },
  requestGetSearchTweets(q) {
    dispatch(requestGetSearchTweets(q));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
