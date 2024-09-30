import axios from 'axios'
import { baseURL } from "./my-account"
import { get } from 'vant/lib/utils'

const http = axios.create({
    baseURL: baseURL,
    timeout: 3000
})

//请求拦截器(经常写一下token信息)
http.interceptors.request.use(config => {
    return config
})


// 响应拦截器(一般把拿到的信息给它返回)
http.interceptors.response.use(response => {
    return response.data
})

export default {
    get(url, params) {
        return http.get(url, { params })
    },
    post(url, params) {
        return http.post(url, data)
    }
}