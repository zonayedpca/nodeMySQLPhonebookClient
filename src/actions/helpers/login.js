export const doLogin = (dispatch, data) => {
  dispatch({
    type: 'GET_LOGIN',
    data
  })
}

export const loadLogin = (dispatch, loading) => {
  dispatch({
    type: 'LOGIN_LOADING',
    data: {
      loading
    }
  });
}

export const doLogout = (dispatch) => {
  dispatch({
    type: 'LOGOUT'
  })
}

export const notLoggedIn = (dispatch) => {
  dispatch({
    type: 'NOT_LOGGED_IN'
  })
}
