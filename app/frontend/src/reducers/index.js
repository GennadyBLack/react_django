import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import { reducer as formReducer } from "redux-form";
import messages from './messages';
import auth from './auth';

export default combineReducers({
    leads,
    errors,
    messages,
    auth,
    form: formReducer,
});
