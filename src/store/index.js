import { questionsReducer, userReducer, resultReducer, timeReducer } from '../reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const reducers = {
    questions: questionsReducer,
    userInfo: userReducer,
    completed: resultReducer,
    time: timeReducer,
}

const appState = combineReducers(reducers);

export const store = createStore(appState, composeWithDevTools(applyMiddleware(thunk, logger)));