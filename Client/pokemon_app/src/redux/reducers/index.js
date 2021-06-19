import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer';


// Combine all reducers
const reducers = combineReducers({
	rootReducer: projectReducer,
});

export default reducers;

