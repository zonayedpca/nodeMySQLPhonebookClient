import axios from 'axios';

export const deletePhone = (id, history) => {
  const token = JSON.parse(window.localStorage.getItem('jwt-token'));
  return async dispatch => {
    dispatch({
      type: 'PHONE_LOADING'
    });
    try {
      const { data } = await axios({
        url: '//phonebookpca.herokuapp.com/graphql',
        method: 'post',
        headers: {
          'Authorization': `Bearer ${token.token}`
        },
        data: {
          query: `
          mutation {
            deletephone(id: ${id})
          }
          `
        }
      });
      if(data.data.deletephone) {
        return dispatch({
          type: 'DELETE_PHONEBOOK',
          id
        })
      }
    } catch(e) {
      return dispatch({
        type: 'ERROR',
        msg: 'Cannot Delete'
      });
    }
  }
}
