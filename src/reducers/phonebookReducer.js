const INITIAL_STATE = { loading: true };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PHONEBOOK_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'GET_PHONEBOOK':
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case 'DELETE_PHONE':
      const newState = state.data.filter(oneData => oneData.id !== action.id);
      return {
        ...state,
        loading: false,
        data: newState
      };
    default:
      return state
  }
}
