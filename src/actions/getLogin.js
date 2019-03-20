import { setAlert } from './helpers/handleAlert';
import sendRequest from './helpers/sendRequest';
import { doLogin, loadLogin, notLoggedIn } from './helpers/login';

export const getLogin = (username, password, history) => {
  return async dispatch => {
    loadLogin(dispatch, true);
    try {
      const { data } = await sendRequest(`
        query {
          login(username: "${username}", password: "${password}") {
            id
            username
            token
          }
        }
      `, false);
      const { data: { login } } = data;
      if(!login.username) {
        setAlert(dispatch, 'ERROR', 'Check username and password again');
        return notLoggedIn(dispatch);
      }
      window.localStorage.setItem('jwt-token', JSON.stringify(login));
      doLogin(dispatch, login);
      setAlert(dispatch, 'SUCCESS', 'Sucessfully Logged In');
      history.push('/phonebook');
    } catch(e) {
      setAlert(dispatch, 'ERROR', 'Cannot log you in');
      return notLoggedIn(dispatch);
    }
  }
}
