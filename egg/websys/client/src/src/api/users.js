import request from '@/util/request'
// import qs from 'qs'

export function login (data) {
  return request({
    url: '/users/login',
    method: 'post',
    data: data
  })
}
