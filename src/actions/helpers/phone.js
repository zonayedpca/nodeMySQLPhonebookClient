export const getThePhone = (dispatch, data) => {
  dispatch({
    type: 'GET_PHONE',
    data
  })
}

export const loadPhone = (dispatch) => {
  dispatch({
    type: 'PHONE_LOADING'
  });
}
