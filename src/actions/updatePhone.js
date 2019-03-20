import { setAlert } from './helpers/handleAlert';
import sendRequest from './helpers/sendRequest';
import { loadPhone } from './helpers/phone';

export const updatePhone = (id, name, phone, history) => {
  return async dispatch => {
    loadPhone(dispatch);
    try {
      const { data } = await sendRequest(`
        mutation {
          updatephone(id: ${id}, name: "${name}", phone: "${phone}")
        }
      `);
      const { data: { updatephone } } = data;

      if(updatephone) {
        setAlert(dispatch, 'SUCCESS', 'Sucessfully Updated!');
        return history.push('/phonebook');
      }
    } catch(e) {
      return setAlert(dispatch, 'ERROR', 'Can not Update');
    }
  }
}
