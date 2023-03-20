const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors())

app.use('/api',require('./routers/studentRouter'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))