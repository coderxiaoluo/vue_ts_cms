import { defineStore } from 'pinia'
import { loginRequest, getUserInfoById } from '@/service/login/loginRequest'
import router from '@/routers'

export const useLoginStores = defineStore('login', {
  state: () => {
    return {
      name: '',
      id: '',
      token: localStorage.getItem('token') ?? '',
      userInfo: ''
    }
  },
  getters: {},
  actions: {
    async accountLoginAction(account: any) {
      // 发送网络请求 获取数据
      const res = await loginRequest(account)
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token

      localStorage.setItem('token', this.token)

      const userInfosResult = await getUserInfoById(res.data.id)
      const userInfo = userInfosResult.data
      this.userInfo = userInfo

      // 进行页面跳转
      router.push({
        path: '/home'
      })
    }
  }
})
