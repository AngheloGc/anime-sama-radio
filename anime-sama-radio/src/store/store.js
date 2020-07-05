import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer';
import { modalReducer } from '../reducers/modalReducer';

const reducers = combineReducers({
    
    auth: authReducer,
    modal: modalReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);