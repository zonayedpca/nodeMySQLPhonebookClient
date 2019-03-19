import axios from 'axios';

export const getRegister = (username, password, history) => {
  return async dispatch => {
    dispatch({
      type: 'REGISTER_LOADING',
      data: {
        loading: true
      }
    })
    try {
      const { data } = await axios({
        url: '//phonebookpca.herokuapp.com/graphql',
        method: 'post',
        data: {
        query: `
          mutation {
            register(username: "${username}", password: "${password}") {
              id,
              username,
              token
            }
          }
        `
        }
      })
      const { data: { register } } = data;

      if(!register.username) {
        dispatch({
          type: 'ERROR',
          msg: 'You are already Registered'
        })
        dispatch({
          type: 'NOT_REGISTERED'
        })
        return history.push('/login');
      }

      dispatch({
        type: 'SUCCESS',
        msg: 'Sucessfully Registered, Please Log In'
      })

      return history.push('/login');
    } catch(e) {
      dispatch({
        type: 'ERROR',
        msg: 'Cannot register'
      })

      return dispatch({
        type: 'NOT_REGISTERED'
      })
    }
  }
}
