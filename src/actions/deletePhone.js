import { setAlert } from './helpers/handleAlert';
import sendRequest from './helpers/sendRequest';
import { phoneDelete } from './helpers/phoneBook';
import { loadPhone } from './helpers/phone';

export const deletePhone = (id, history) => {
  return async dispatch => {
    loadPhone(dispatch);
    try {
      const { data } = await sendRequest(`
        mutation {
          deletephone(id: ${id})
        }
      `);
      if(data.data.deletephone) {
        return phoneDelete(dispatch, id);
      }
    } catch(e) {
      return setAlert(dispatch, 'ERROR', 'Cannot Delete');
    }
  }
}
