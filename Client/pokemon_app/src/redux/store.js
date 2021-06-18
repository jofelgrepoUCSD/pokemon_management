import {applyMiddleware, createStore} from 'redux';
import reducers from "./reducers/index";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const middleware = [thunk]

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware)));

export default store;