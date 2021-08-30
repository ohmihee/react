const express = require('express')
const app = express()
require('dotenv').config('env')
// 보안이 필요한 경우에 사용 위와 같이 기본 설정
// 사용시에는 process.env.PORT와 같이 해당.env파일에서 PORT=3000 같이 지정한 것으로 하여 사용
// 즉 process.env.[설정한 것]
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const Router = require('./routes/main.js')
const multer = require('multer')
// 책 247pg
const fs = require('fs')
const testRouter = require('./routes/test.js')

const port = process.env.PORT||3006


app.set('view engine','html')

app.use(cookieParser(process.env.COOKIE_SECRET))
// 요청에 의하여 받은 쿠리를 req.cookies 객체로 받음
// app.use(cookieParser(비밀키)) 이와 같은 식으로도 사용가능
// 위와 같은 경우에는 req.SignedCookies 로 사용, 
// <-> 쿠키를 보낼 때는 res.cookie(키,값,옵션) 이와 같이 보낸다.
// 쿠키 보낼 때 옵션 -> domain,expires,httpOnly,maxAge,path,secure 등
// 쿠키 지울 때 -> res.clearCookie 쿠키를 지울 때는 키,값 그리고 httpOnly,secure옵션이 일치해야 가능
// 옵션 중에 signed를 true로 설정하고 쿠키를 보내면 쿠키 뒤에 서명이 붙어서 보냄

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
// 요청과 함게 전달되는 본문의 데이터를 이용할 수 있게 가공하여 주는 것
// req.body로 이용
// 폼 데이터나 AJAX요청의 데이터를 처리하는데 이용
// ex) 폼에서 name = user 로 하여 post 메서드로 보낸 경우 {name:user}와 같이 객체로 받아 req.body.name으로 이용 가능
// 238pg 참고 ) URL-encoded 형식으로 name=user&info=birth로 하여 보낸 경우 {name:user,info:birth}와 같은 객체 형식으로 받는다.
// extended:false -> 쿼리스트링 해석
// extended:true -> qs모듈을 사용하여 쿼리스트링 해석
// app.use(express.json())도 데이터를 가공하는 기능

app.use(express.static(path.join(__dirname,'public')))
// static는 express에 대한 미들웨어로 정적인 파일들을 제공하는 라우터 역할


app.use(morgan('dev'))
//morgan
//-> 요청과 응답에 대한 정보를 콘솔에 기록
// 위와 같이 사용
// 인자로 넣는 값에 따라 기록되는 정보가 달라짐
// dev, combined, short, tiny emd
// GET / 200 -> 순서대로 메서드 주소 상태코드

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
    name:'session-cookie'
}))
// express-session
// -> 데이터를 임시적으로 저장시에 유용
// 일반적으로 위와 같이 사용
// cookie:{}-> 세션 쿠키에 대한 설정
// secure:false -> https가 아닌 환경 즉 상대적으로 보안이 취약한 환경에서도 사용가능하도록 설정
// httpOnly:true -> 클라이트가 자바스크립트를 이용하여 해당 쿠키의 값을 바꾸지 못한다. 
// res.session.destroy() -> 세션 모두 제거

nunjucks.configure('views',{express:app})

//multer에 대한 설정 ==============================================================
try{
    fs.readdirSync('uploads');
}catch(err){
    console.error('uploads 폴더를 생성함')
    fs.mkdirSync('uploads')
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/')
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname,ext)+Date.now()+ext)
        },
    }),
    limits:{fileSize: 5 *1024*1024}
})

app.use('/test',testRouter)
// app.get으로 할 때는 상관없이 실행되지만
// app.use로 한 경우 app.use('/',Router)의 위에 코드가 위치해야만 실행되는 이유?======






app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'))
})

app.post('/login',
    upload.single('image'),(req,res)=>{
        console.log('req.file',req.file,'req.body',req.body)
        res.redirect('/')
    })
/*
동일한 경로에 대하여 get/post 나뉜 경우 아래와 같이 코드를 작성할 수 있다.
app.route('/login')
    .get((req,res)=>{
        res.send('get을 get')
    })
    .post((req,res)=>{
        res.send('post')
    })
*/

/*
app.use(
        cookieParser(process.env.COOKIE_SECRET),
        express.json(),
        bodyParser.urlencoded({extended:false}),
        morgan('dev'),
        session({
        resave:false,
        saveUninitialized:false,
        secret:process.env.COOKIE_SECRET,
        cookie:{
            httpOnly:true,
            secure:false,
        },
        name:'session-cookie'
    })
)
위와 같이 한번에 미들웨어를 설정하는 것도 가능
// 다만 해당 미들웨어가 내부적으로 next를 포함하고 있는 경우 가능
// 그냥 따로 따로 하는게 나을 듯...
*/

/*
조건문에 따라 미들웨어를 장착하는 것도 가능
app.use((req,res,next)=>{
    if(process.env.NODE_ENV==='production'){
        morgan('combined')(req,res,next)
    }else{
        morgan('dev')(req,res,next)
    }
})

*/
app.use('/',Router)

app.use((req,res,next)=>{
    res.status(404).send('Not Found')
})

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message)
})

app.listen(port,()=>{
    console.log(`server start port ${port}`)
})

//255pg req와 res 관련 객체 보고 정리하기

// res.json()에 대한 개념 정리하기
// json에 대한 내용 관련 참고 사이트