import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import logReducer from './reducers/logReducer'

const initialState = {};

const middleware = [thunk];

const store = configureStore(
    logReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

