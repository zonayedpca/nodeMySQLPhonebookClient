import { doLogout } from './helpers/login';

export const getLogout = history => {
  window.localStorage.clear();
  return dispatch => {
    doLogout(dispatch);
    return history.push('/login');
  }
}
