import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: 'http://192.168.3.207:5000',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json'
  }
})

service.interceptors.request.use(
  config => {
    if (store.state.login.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }

    return config
  }
)

export default service
