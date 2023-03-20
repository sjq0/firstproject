// 导入 express
const express = require('express')



// 创建 app
const app = express()

// 设置跨域访问
const cors = require('cors')
app.use(cors())

//创建路由
let router = express.Router()

app.use(router)

// 处理POST参数
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')

// 处理 x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// 处理 application/json
app.use(bodyParser.json())

// 处理 mutipart/form-data
app.use(multiparty())

// 引入jwt
const jwt = require("jsonwebtoken")

// // 测试接口能否正常调用
// app.get('/info', (req, res) => {
//     res.send("Hello shaoyahu !")
// })

// 引入 mysql 方法
let { conMysql } = require('./mysql')
// 获取articleList的数据信息        data(内容)
app.get('/getArtOneData', (req, res) => {
    let sql = 'select * from articalonedata'
    conMysql(sql).then(result => {
        res.send(result)
    })
})


// 获取noticeonedata的数据信息      data(日期，内容)
app.get('/getNotOneData', (req, res) => {
    let sql = 'select * from noticeonedata'
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

// 获取noticetwodata的数据信息      data(日期，内容)
app.get('/getNotTwoData', (req, res) => {
    let sql = 'select * from noticetwodata'
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

// 获取noticethreedata的数据信息      data(标题，内容，时间，访问数量)
app.get('/getNotThreeData', (req, res) => {
    let sql = 'select * from noticethreedata'
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

// 获取noticeFourdata的数据信息      data(标题，内容，时间，访问数量)
app.get('/getNotFourData', (req, res) => {
    let sql = 'select * from noticeFourdata'
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

// 获取noticeFivedata的数据信息      data(图片路径，标题)
app.get('/getNotFiveData', (req, res) => {
    let sql = 'select * from noticeFivedata'
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

app.post('/login', (req, res) => {
    let { username, password } = req.body
    console.log(req.body);
    // 参数1:用户信息对象 参数2:加密的密钥 参数3:配置当前token的有效时间5小说
    let token = jwt.sign({ username: username }, 'test ^_^', {
        expiresIn: '5h'
    })  
    console.log(token);
    let sql = `select * from users where username = '${username}' and password = '${password}' `
    conMysql(sql).then(result => {
        console.log(result);
        if (result.length==0) {
            return res.send({ status: 404, msg: '登录失败,密码或者账号错误' })
        }
        res.send({ status: 200, msg: '登录成功', token: token, userInfo: username })
    })
    
})


app.post('/logon', (req, res) => {
    let { username, password ,password1 } = req.body
    console.log(req.body);
    let sql = `INSERT INTO users values('${username}','${password}','${password1}')`
    conMysql(sql).then(result => {
        console.log('注册成功');
    })
    
})

app.get('/search',(req,res)=>{
    let s = req.query.ss
    // console.log(s);
    let sql = `select * from searchdata where name like '%${s}%'`
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

app.get('/medicine', (req, res) => {
    let sql = 'select * from medicine'
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

app.get('/detail', (req, res) => {
    // console.log(req.query);
    let id = req.query.id
    let sql = `select * from medicine where id = ${id}`
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

app.get('/num', (req, res) => {
    // console.log(req.query);
    let id = req.query.id
    let sql = `select * from shopping where shoppingid = ${id}`
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})


app.get('/upnum', (req, res) => {
    // console.log(req.query);
    let id = req.query.id
    let sum = req.query.num
    let sql = `update shopping set num = ${sum} where shoppingid = ${id}`
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

app.get('/upstatus', (req, res) => {
    // console.log(req.query);
    let id = req.query.id
    let status = req.query.status
    console.log(id,status);
    let sql = `update shopping set status = ${status} where shoppingid = ${id}`
    let sql2 = `select * from shopping where shoppingid = ${id}`
    conMysql(sql).then(result => {
        // console.log(result);
        // res.send(result)
    })
    conMysql(sql2).then(result => {
        // console.log(result);
        res.send(result)
    })
})

app.get('/allchecked',(req,res)=>{
    let sql = `update shopping set status = 1`
    conMysql(sql).then(result =>{
        // console.log(result);
        // res.send(result)
    })
})

app.get('/insertsum', (req, res) => {
    // console.log(req.query);
    console.log(123);
    let id = req.query.id
    let sum = req.query.sum
    let status = req.query.status
    console.log(id,sum,status);
    // let sql1 = `update shopping set num = ${sum} where shoppingid = ${id}`
    let sql1 = `insert into shopping (shoppingid , num , status) values (${id} , ${sum} , ${status})`
    // let sql2 = `select * from shopping where shoppingid = ${id}`
    conMysql(sql1).then(result => {
        // console.log(result);
        // res.send(result)
    })
    // conMysql(sql2).then(result => {
    //     console.log(result);
    //     res.send(result)
    // })
})

app.get('/update',(req,res)=>{
    let id = req.query.id
    let sum = req.query.num
    let status = req.query.status

    let sql = `update shopping set num = ${sum} where shoppingid = ${id}`
    conMysql(sql).then(result => {
        // console.log(result);
        // res.send(result)
    })
})

app.get('/all', (req, res) => {
    // console.log(req.query);
    let sql = `select * from shopping,medicine where shopping.shoppingid = medicine.id`
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

app.get('/deleteshop', (req, res) => {
    let id = req.query.id
    // console.log(req.query);
    let sql = `DELETE FROM shopping WHERE shoppingid = ${id}`
    conMysql(sql).then(result => {
        // console.log(result);
        res.send(result)
    })
})

// 启动
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1:' + 3000);
})

