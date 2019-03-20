import { removeAlert } from './helpers/handleAlert';

export const clearAlert = () => {
  return dispatch => removeAlert(dispatch);
}
