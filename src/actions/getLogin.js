import axios from 'axios';

export const getLogin = (username, password, history) => {
  return async dispatch => {
    dispatch({
      type: 'LOGIN_LOADING',
      data: {
        loading: true
      }
    });
    try {
      const { data } = await axios({
        url: '//phonebookpca.herokuapp.com/graphql',
        method: 'post',
        data: {
        query: `
          query {
            login(username: "${username}", password: "${password}") {
              id
              username
              token
            }
          }
        `
        }
      })
      const { data: { login } } = data;
      console.log(login);
      if(!login.username) {
        dispatch({
          type: 'ERROR',
          msg: 'Check username and password again'
        })
        return dispatch ({
          type: 'NOT_LOGGED_IN'
        })
      }
      window.localStorage.setItem('jwt-token', JSON.stringify(login));
      dispatch({
        type: 'GET_LOGIN',
        data: login
      })
      dispatch({
        type: 'SUCCESS',
        msg: 'Sucessfully Logged In'
      })
      history.push('/phonebook');
    } catch(e) {
      dispatch({
        type: 'ERROR',
        msg: 'Cannot log you in'
      })
      dispatch({
        type: 'NOT_LOGGED_IN'
      })
    }
  }
}
