import request from "../request/request";

//查询学生
export function getStudent(){
    return request("get",'/getstudent')
}

//添加学生
export function addStudent(student){
    return request('get','/addstudent',student)
}

//删除学生
export function deleteStudent(ids){
    return request('get',`/deletestudent`,ids)
}

//更新学生信息
export function updateStudent(id) {
    return request('get',`/updatestudent?id=${id}`)
}

//搜索学生信息
export function searchStudent(id){
    return request('get',`/searchstudent?id=${id}`)
}