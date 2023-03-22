const db = require('../db/mysql')

exports.getStudent = (req, res) => {
    // console.log(req);
    // 传入三个参数 第一个查询 , 第二个数据 , 第三个 回调函数
    db.query('select * from student', (err, data) => {
        if (err) throw err
        res.send({
            code: 200,
            msg: '接收成功',
            data
        })
    })
}

exports.addStudent = (req, res) => {
    // console.log(req.query);
    let { name, age, sex, address, date } = req.query
    // console.log(name, age, sex, address, date);
    // 属性sql语句 为指定列插入数据
    sql = `insert into student(name , age, sex ,address , date) value (?,?,?,?,?)`
    data = [name, age, sex, address, date]
    db.query(sql, data, (err, results, fields) => {
        if (err) console.log(err);
        res.send({
            code: 200,
            msg: '添加成功'
        })
    })
}

exports.deleteStudent = (req, res) => {
    // console.log(req.query);
    let arr = [];
    for (var i in req.query) {
        arr.push(req.query[i]);
    }
    // console.log(arr);
    let value = arr.join(',')
    // console.log(value);
    db.query('delete from student where id in (' + value + ')', (err, result) => {
        res.send({
            code: 200,
            mage: '删除成功'
        })
    })
}

exports.deleteOnestudent = (req,res) => {
    console.log(req.query);
    let { id } = req.query
    console.log(id);
    sql = `delete from student where id = ${id}`
    db.query(sql,(err,result)=>{
        res.send({
            code: 200,
            mage: '删除成功'
        })
    })
}

exports.updateStudent = (req,res) => {
    let {id, name, age, sex, address, date } = req.query
    console.log(id,name, age, sex, address, date);
    sql = `update student set name='${name}',age='${age}',sex='${sex}',address='${address}',date='${date}' where id = '${id}'`
    db.query(sql,(err ,result) => {
        res.send({
            code: 200,
            mage: '修改成功'
        })
    })
}