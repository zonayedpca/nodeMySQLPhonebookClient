import { setAlert } from './helpers/handleAlert';
import sendRequest from './helpers/sendRequest';
import { loadPhone, getThePhone } from './helpers/phone';

export const getPhone = (id) => {
  return async dispatch => {
    loadPhone(dispatch);
    try {
      const { data } = await sendRequest(`
        query {
          phone(id: ${id}) {
            id
            phone
            name
          }
        }
      `);
      const { data: { phone } } = data;
      getThePhone(dispatch, phone);
    } catch(e) {
      return setAlert(dispatch, 'ERROR', 'Something went wrong');
    }
  }
}
