import {combineReducers, createStore} from 'redux';
import tenantsReducer from './tenantsReducer/index';

const store = createStore(combineReducers({
    tenants: tenantsReducer
}));

export default store;