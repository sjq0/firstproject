const router = require('express').Router();

// 接收基本数据
router.get('/getstudent',require('../api/studentindex').getStudent)

router.get('/addstudent',require('../api/studentindex').addStudent)

router.get('/deletestudent',require('../api/studentindex').deleteStudent)

module.exports = router