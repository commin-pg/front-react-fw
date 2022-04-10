import { combineReducers } from 'redux';
import user from './user_reducer';
import login from './login_reducer'
import menu from './menu_reducer'

const rootReducer = combineReducers({
    user,
    login,
    menu,
});

export default rootReducer;