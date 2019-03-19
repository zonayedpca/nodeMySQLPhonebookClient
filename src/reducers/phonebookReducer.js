export default(state = { loading: true }, action) => {
  switch (action.type) {
    case 'PHONEBOOK_LOADING':
      return {
        loading: true
      };
    case 'GET_PHONEBOOK':
      return {
        loading: false,
        data: action.data
      };
    case 'DELETE_PHONEBOOK':
      const newState = state.data.filter(oneData => oneData.id !== action.id);
      return {
        loading: false,
        data: newState
      };
    default:
      return state
  }
}
