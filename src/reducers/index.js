import { combineReducers } from 'redux';

import alertReducer from './alertReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import phonebookReducer from './phonebookReducer';
import phoneReducer from './phoneReducer';

const reducers = combineReducers({
  alert: alertReducer,
  login: loginReducer,
  register: registerReducer,
  phonebook: phonebookReducer,
  phone: phoneReducer
});

export default reducers;
