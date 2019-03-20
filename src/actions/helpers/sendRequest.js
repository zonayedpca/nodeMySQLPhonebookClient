import axios from 'axios';

export default (query, auth = true) => {
  const token = JSON.parse(window.localStorage.getItem('jwt-token'));
  return axios({
    url: '//phonebookpca.herokuapp.com/graphql',
    method: 'post',
    headers: auth ? {
      'Authorization': `Bearer ${token.token}`
    }: '',
    data: {
      query
    }
  })
}
