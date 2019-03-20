export const registerLoading = (dispatch, loading) => {
  dispatch({
    type: 'REGISTER_LOADING',
    data: {
      loading
    }
  })
}

export const notRegistered = (dispatch) => {
  dispatch({
    type: 'NOT_REGISTERED'
  })
}
