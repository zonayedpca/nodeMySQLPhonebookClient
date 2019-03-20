export const setAlert = (dispatch, type, msg) => {
  dispatch({
    type,
    msg
  })
}

export const removeAlert = (dispatch) => {
  dispatch({
    type: 'CLEAR'
  })
}
