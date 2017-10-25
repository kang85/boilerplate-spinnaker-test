import { combineReducers } from 'redux';
import sample from './sample';
import auth from './auth';
import base from './base';
import user from './user';

const modules = combineReducers({
    sample,
    auth,
    base,
    user
});

export default modules;
