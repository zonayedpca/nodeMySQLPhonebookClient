import { setAlert } from './helpers/handleAlert';
import sendRequest from './helpers/sendRequest';
import { registerLoading, notRegistered } from './helpers/register';

export const getRegister = (username, password, history) => {
  return async dispatch => {
    registerLoading(dispatch, true);
    try {
      const { data } = await sendRequest(`
        mutation {
          register(username: "${username}", password: "${password}") {
            id,
            username,
            token
          }
        }
      `, false);
      const { data: { register } } = data;

      if(!register.username) {
        setAlert(dispatch, 'ERROR', 'You are already Registered');
        notRegistered(dispatch);
        return history.push('/login');
      }
      setAlert(dispatch, 'SUCCESS', 'Sucessfully Registered, Please Log In');

      return history.push('/login');
    } catch(e) {
      setAlert(dispatch, 'ERROR', 'Cannot register');

      return notRegistered(dispatch);
    }
  }
}
