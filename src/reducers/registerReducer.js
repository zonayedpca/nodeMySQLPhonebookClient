export default(state = { loading: false }, action) => {
  switch (action.type) {
    case 'REGISTER_LOADING':
      return {
        loading: true
      }
    case 'NOT_REGISTERED':
      return {
        loading: false
      };
    default:
      return state;
  }
}
