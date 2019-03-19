export default(state = null, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        type: 'success',
        msg: action.msg
      }
    case 'ERROR':
      return {
        type: 'error',
        msg: action.msg
      }
    case 'CLEAR':
      return null
    default:
      return state;
  }
}
