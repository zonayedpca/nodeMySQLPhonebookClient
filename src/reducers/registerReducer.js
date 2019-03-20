const INITIAL_STATE = { loading: false };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REGISTER_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'NOT_REGISTERED':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
