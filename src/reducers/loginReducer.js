export default(state = { auth: false, loading: false }, action) => {
  switch (action.type) {
    case 'LOGIN_LOADING':
      return {
        auth: false,
        loading: true
      }
    case 'GET_LOGIN':
      return {
        auth: true,
        loading: false,
        ...action.data
      };
    case 'NOT_LOGGED_IN':
      return {
        auth: false,
        loading: false
      };
    case 'LOGOUT':
      return {
        auth: false
      };
    default:
      return state;
  }
}
