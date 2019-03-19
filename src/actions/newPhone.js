import axios from 'axios';

export const newPhone = (name, phone, getPhonebook) => {
  const token = JSON.parse(window.localStorage.getItem('jwt-token'));
  return async dispatch => {
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
            newphone(name: "${name}", phone: "${phone}")
          }
        `
        }
      })
      const { data: { newphone } } = data;
      if(newphone) {
        return getPhonebook();
      }
    } catch(e) {
      return dispatch({
        type: 'ERROR',
        msg: 'Something went wrong!'
      })
    }
  }
}
