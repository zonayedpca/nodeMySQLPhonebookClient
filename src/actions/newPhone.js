import { setAlert } from './helpers/handleAlert';
import sendRequest from './helpers/sendRequest';

export const newPhone = (name, phone, getPhonebook) => {
  return async dispatch => {
    try {
      const { data } = await sendRequest(`
        mutation {
          newphone(name: "${name}", phone: "${phone}")
        }
      `);
      const { data: { newphone } } = data;
      if(newphone) {
        return getPhonebook();
      }
    } catch(e) {
      return setAlert(dispatch, 'ERROR', 'Something went wrong!');
    }
  }
}
