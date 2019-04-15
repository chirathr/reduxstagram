import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import posts from './data/posts';
import comments from './data/comments';


const defaultState = {
    posts,
    comments
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (state) => state
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
