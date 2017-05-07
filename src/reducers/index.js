import { combineReducers } from 'redux';
import PostsResucer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsResucer
});

export default rootReducer;
