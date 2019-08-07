import request from '@/utils/request'
import API from '../constants/constants-api'

export function get() {
  return request({
    url:  API.apiCreateData,
    method: 'get'
  })
}

export function create(data) {
  return request({
    url:  API.apiCreateData,
    method: 'post',
    data: data
  })
}

export function remove(id) {
  return request({
    url:  `${API.apiCreateData}/${id}`,
    method: 'delete'
  })
}

export function update(id, data) {
  return request({
    url:  `${API.apiCreateData}/${id}`,
    method: 'put',
    data: data
  })
}

export function search(name) {
  return request({
    url:  `${API.apiSearchUser}${name}`,
    method: 'get'
  })
}

