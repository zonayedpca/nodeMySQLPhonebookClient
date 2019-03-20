export const phoneBookLoading = (dispatch, loading) => {
  dispatch({
    type: 'PHONEBOOK_LOADING',
    data: {
      loading
    }
  });
}

export const getThePhoneBook = (dispatch, data) => {
  dispatch({
    type: 'GET_PHONEBOOK',
    data
  });
}

export const phoneDelete = (dispatch, id) => {
  dispatch({
    type: 'DELETE_PHONE',
    id
  })
}
