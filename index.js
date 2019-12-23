const express = require('express')
var bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express();
const port = 4005

app.use(bodyParser.urlencoded({extended:false}))
app.use (bodyParser.json())

app.use(fileUpload())

app.use('/API', require('./routes/index'))

app.listen(port, ()=>{
    console.log(`Microsevicio Productos funcionando en puerto ${port}`)
})