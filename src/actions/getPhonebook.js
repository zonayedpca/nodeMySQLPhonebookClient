import { setAlert } from './helpers/handleAlert';
import sendRequest from './helpers/sendRequest';
import { phoneBookLoading, getThePhoneBook } from './helpers/phoneBook';

export const getPhonebook = () => {
  return async dispatch => {
    phoneBookLoading(dispatch, true);
    try {
      const { data } = await sendRequest(`
        query {
          phonebook {
            id
            name
            phone
          }
        }
      `);

      const { data: { phonebook } } = data;

      getThePhoneBook(dispatch, phonebook);
    } catch(e) {
      return setAlert(dispatch, 'ERROR', 'Something went wrong!');
    }
  }
}
