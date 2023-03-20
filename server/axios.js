const axios = require('axios')

const service = axios.create({
  baseURL: 'http://localhost:3000'
})

export default service
