import axios from 'axios';

export const getPhone = (id) => {
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
          query {
            phone(id: ${id}) {
              id
              phone
              name
            }
          }
        `
        }
      })
      const { data: { phone } } = data;
      dispatch({
        type: 'GET_PHONE',
        data: phone
      })
    } catch(e) {
      return dispatch({
        type: 'ERROR',
        msg: 'Something went wrong'
      })
    }
  }
}
