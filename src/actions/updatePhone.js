import axios from 'axios';

export const updatePhone = (id, name, phone, history) => {
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
            updatephone(id: ${id}, name: "${name}", phone: "${phone}")
          }
        `
        }
      })
      const { data: { updatephone } } = data;

      if(updatephone) {
        dispatch({
          type: 'SUCCESS',
          msg: 'Sucessfully Updated!'
        })
        return history.push('/phonebook');
      }
    } catch(e) {
      return dispatch({
        type: 'ERROR',
        msg: 'Can not Update'
      });
    }
  }
}
