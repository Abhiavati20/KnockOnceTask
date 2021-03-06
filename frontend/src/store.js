import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux'

import thunk from 'redux-thunk'

import {
    userRegisterReducer,
    userListReducer,
} from './reducers/userReducer' 

import { 
    composeWithDevTools 
} from 'redux-devtools-extension'

const reducer = combineReducers({
    userRegister : userRegisterReducer,
    userList     : userListReducer, 
});

const initialState = {

};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;