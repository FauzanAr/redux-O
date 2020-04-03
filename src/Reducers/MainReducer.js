import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import visibilityFilter from './FilterReducer';

export default combineReducers({
    TodoReducer,
    visibilityFilter
})
