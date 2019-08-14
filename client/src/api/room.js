import request from '@/utils/request'

export function listRoom(data) {
  return request({
    url:  '/api/room',
    method: 'get'
  })
}
