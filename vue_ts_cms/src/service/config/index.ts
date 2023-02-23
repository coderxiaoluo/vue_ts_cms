// export const BASE_URL1 = 'http://152.136.185.210:5000'
// export const BASE_URL1 = 'http://localhost:8888'

export let BASE_URL = ''
// vite提供的环境变量
// 运行的模式
// console.log(import.meta.env.MODE)
// // 是否运行在开发环境
// console.log(import.meta.env.DEV)
// // 是否运行在生产环境
// console.log(import.meta.env.PROD)

// console.log(import.meta.env)

if (import.meta.env.MODE === 'development') {
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  BASE_URL = 'http://code.prod'
}

export const TIME_OUT1 = 10000
