import request from '../../request/request.js'

export function Lbimgs(type){
    return request("get",`/banner`,type)
}

export function tuijian(){
	return request("get",'/personalized?limit=6')
}

export function xunhuan(){
	return request("get",'/personalized/newsong')
}

export function dt(){
	return request("get",'/dj/hot?limit=12')
}

export function autoplay(id){
	return request("get",`/song/url?id=${id}`)
}

export function newmusic(){
	return request("get",'/top/song?type=7')
}

export function musicall(id){
	return request("get",`/song/url?id=${id}`)
}

export function getgeci(id){
	return request("get",`/lyric?id=${id}`)
}