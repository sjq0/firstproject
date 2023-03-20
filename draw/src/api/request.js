//封装axios
import axios from 'axios'

const instance = axios.create({
    // 全局配置项
    baseURL:'http://127.0.0.1:3000/',
    // baseURL:'/api',
    timeout:5000
})

// 请求拦截
instance.interceptors.request.use(config=>{
    if(localStorage.getItem('token')){
        config.headers['X-Nideshop-Token'] = localStorage.getItem('token')
    }
        return config
    },err=>{
    return new Promise.reject(err)
})

// 响应拦截:
instance.interceptors.response.use(res=>{
    return res
},err=>{
    return new Promise.reject(err)
})

export default instance