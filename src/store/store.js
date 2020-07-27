import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authReducer } from '../reducers/authReducer';
import { modalReducer } from '../reducers/modalReducer';
import { songListReducer } from './../reducers/songListReducer';

import thunk from 'redux-thunk';

const reducers = combineReducers({
    
    auth: authReducer,
    modal: modalReducer,
    songList: songListReducer,
})

export const store = createStore(
    reducers,
    applyMiddleware( thunk )
);