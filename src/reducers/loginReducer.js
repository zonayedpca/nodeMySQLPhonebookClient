const INITIAL_STATE = { auth: false, loading: false };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_LOADING':
      return {
        ...state,
        auth: false,
        loading: true
      }
    case 'GET_LOGIN':
      return {
        ...state,
        auth: true,
        loading: false,
        ...action.data
      };
    case 'NOT_LOGGED_IN':
      return {
        ...state,
        auth: false,
        loading: false
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: false
      };
    default:
      return state;
  }
}
