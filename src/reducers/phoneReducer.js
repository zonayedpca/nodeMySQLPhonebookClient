export default(state = { loading: true }, action) => {
  switch (action.type) {
    case 'PHONE_LOADING':
      return {
        loading: true
      };
    case 'GET_PHONE':
      return {
        loading: false,
        ...action.data
      };
    default:
      return state
  }
}
