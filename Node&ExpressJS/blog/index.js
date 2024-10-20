// library express 
const express = require('express')
// return object 
const app = express()
const port = 3000

// /:route (tuyen duong-> truy cap trang)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app dc khoi tao tu express func va lang nghe tu port(gate) 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ctr c : exit locallhost 
// node index.js -> run project 
// truy cap locallhost:3000/trang_chu -> trang web 
// auto restart node app : nodemon 