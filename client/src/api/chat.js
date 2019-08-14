import request from '@/utils/request'

export function sendMessage(data) {
  return request({
    url:  `/api/chat/`,
    method: 'post',
    data: data
  })
}

export function getMessageFromRoom(idRoom) {
  return request({
    url:  `/api/chat/${idRoom}`,
    method: 'get'
  })
}