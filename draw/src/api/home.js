import request from '@/api/request'

export const list = () => {
    return request({
        method: 'get',
        url:'/index'
    })
}

export const search = ()=>{
    return request({
        method:'get',
        url:'/search'
    })
}