import lRequest from '../index'

export function loginRequest(account: any) {
  return lRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return lRequest.get({
    url: `/users/${id}`,
    // 携带请求头
    headers: { Authorization: localStorage.getItem('token') }
  })
}
