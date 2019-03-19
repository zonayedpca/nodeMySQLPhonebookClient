export const getLogout = history => {
  window.localStorage.clear();
  return dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
    history.push('/login');
  }
}
