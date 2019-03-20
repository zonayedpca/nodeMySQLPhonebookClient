const INITIAL_STATE  = { type: null, msg: null };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        type: 'success',
        msg: action.msg
      }
    case 'ERROR':
      return {
        ...state,
        type: 'error',
        msg: action.msg
      }
    case 'CLEAR':
      return {
        ...state,
        type: null,
        msg: null
      }
    default:
      return state;
  }
}
