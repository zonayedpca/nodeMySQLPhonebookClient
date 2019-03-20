const INITIAL_STATE = { loading: true };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PHONE_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'GET_PHONE':
      return {
        ...state,
        loading: false,
        ...action.data
      };
    default:
      return state
  }
}
