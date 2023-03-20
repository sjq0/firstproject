/*
1.在当前项目下 安装 mysql模块
npm i mysql --save-dev
*/
// 2.引入mysql模块
const mysql = require('mysql')
// 3.创建连接池
const pool = mysql.createPool({
    // 数据库地址
    host: '127.0.0.1',
    // 用户名
    user: 'root',
    // 密码
    password: 'root',
    // 端口
    port: 3306,
    // 数据库名字
    database: 'demo'
})
// 4.封装sql语句
// 获取连接
const query = (sql, params, callback) => {
    //获取连接
    pool.getConnection((err, conn) => {
        if (err) {
            console.log('连接数据库失败');
            pool.releaseConnection(); //释放数据库
        }
        //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数
        conn.query(sql, params, (err, result, fields) => {
            if (err) {
                conn.release(); // 释放连接
                console.log('执行sql失败');
                return;
            }
            console.log(result);
            // 传递数据 results作为数据操作后的结果，fields作为数据库连接的一些字段
            callback(result, fields)
            conn.release(); // 释放连接
        })
    })
}
module.exports = {
    query
}