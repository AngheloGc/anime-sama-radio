import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer';
import { modalReducer } from '../reducers/modalReducer';
import { songListReducer } from './../reducers/songListReducer';

const reducers = combineReducers({
    
    auth: authReducer,
    modal: modalReducer,
    songList: songListReducer,
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);