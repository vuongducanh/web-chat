import request from '@/utils/request'

export function getListUser() {
  return request({
    url:  '/api/users/list-users',
    method: 'get'
  })
}
