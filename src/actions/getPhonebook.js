import axios from 'axios';

export const getPhonebook = () => {
  const token = JSON.parse(window.localStorage.getItem('jwt-token'));

  return async dispatch => {
    dispatch({
      type: 'PHONEBOOK_LOADING',
      data: {
        loading: true
      }
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
            phonebook {
              id
              name
              phone
            }
          }
        `
        }
      })

      const { data: { phonebook } } = data;

      dispatch({
        type: 'GET_PHONEBOOK',
          data: phonebook
      });
    } catch(e) {
      return dispatch({
        type: 'ERROR',
        msg: 'Something went wrong!'
      })
    }
  }
}
