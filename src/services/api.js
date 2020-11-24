import axios from 'axios'

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: '39806f51'
  }
})

export default api
