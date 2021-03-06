import { connect } from 'react-redux';
import PostForm from '../../components/Molecules/PostForm/PostForm';
import { inputUpdate, requestPostUpdate } from '../../actions/update';

const mapStateToProps = state => ({
  data: state.updateReducer
});

const mapDispatchToProps = dispatch => ({
  inputUpdate(value) {
    dispatch(inputUpdate(value));
  },
  requestPostUpdate(value) {
    dispatch(requestPostUpdate(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
