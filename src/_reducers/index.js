import { combineReducers } from 'redux';
import user from './user_reducer';
import login from './login_reducer'

const rootReducer = combineReducers({
    user,
    login
});

export default rootReducer;