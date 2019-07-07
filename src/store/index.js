import { questionsReducer, userReducer, resultReducer, timeReducer } from '../reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducers = {
    questions: questionsReducer,
    userInfo: userReducer,
    completed: resultReducer,
    time: timeReducer,
}

const appState = combineReducers(reducers);

export const store = createStore(appState, applyMiddleware(thunk, logger));