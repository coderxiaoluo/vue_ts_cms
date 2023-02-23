import LRequest from './request'
import { BASE_URL, TIME_OUT1 } from './config'
import { localCache } from '@/utils/cache'

const lRequest = new LRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT1
})

export default lRequest
