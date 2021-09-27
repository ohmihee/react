const express = require('express')
const app = express()
const port = process.env.PORT||3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const expressSession = require('express-session')
const {sequelize} = require('./models')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

app.use(cors({
    origin:true,
    credentials:true
}))

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
        httpOnly:true,
        secure:false
    },
    name:'token'
}))


sequelize.sync({force:false})
.then(()=>{
    console.log('db suc')
})
.catch((e)=>{
    console.log('db fail',e)
})


app.listen(port,(e)=>{
    console.log(`server start port ${port}`,e)
})