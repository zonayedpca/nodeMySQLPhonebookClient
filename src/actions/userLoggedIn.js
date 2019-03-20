import { notLoggedIn, doLogin } from './helpers/login';

export const userLoggedIn = () => {
  const token = JSON.parse(window.localStorage.getItem('jwt-token'));
  return dispatch => {
    if(token && token.username) {
      doLogin(dispatch, token);
    } else {
      return notLoggedIn(dispatch);
    }
  }
}
