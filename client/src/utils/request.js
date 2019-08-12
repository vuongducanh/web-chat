import axios from 'axios'

const service = axios.create({
  baseURL: 'http://192.168.3.207:5000',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default service
