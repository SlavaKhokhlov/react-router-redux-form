import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsResucer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsResucer,
  form: formReducer
});

export default rootReducer;
