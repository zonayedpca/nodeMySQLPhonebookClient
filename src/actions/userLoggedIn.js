export const userLoggedIn = () => {
  const token = JSON.parse(window.localStorage.getItem('jwt-token'));
  return dispatch => {
    if(token && token.username) {
      dispatch({
        type: 'GET_LOGIN',
        data: token
      });
    } else {
      dispatch({
        type: 'NOT_LOGGED_IN'
      })
    }
  }
}
