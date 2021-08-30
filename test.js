const express = require('express')
const router = express.Router()

router.use('/',(req,res,next)=>{
    next('route')
    // enxt('route') 아래의 미들웨어들을 실행하지 않고 경로가 일치하는 다음의 라우터를 실행한다.
}, (req,res,next)=>{
    console.log('실행x')
    next()
}, (req,res,next)=>{
    console.log('실행x')
    next()
})
router.use('/',(req,res)=>{
    console.log('실행')
    res.send('test start')
})

module.exports = router

// 라우터 매개변수 찾아보기!
// 예를 들어
/*
router('/:id',(req,res)=>{
    console.log(res.params.id)
})
이런 식으로 경로의 마지막에 :user :id 와 같이 매개변수를 주면 해당 매개변수를 가져올 수 있다.
주소창에 http://localhost:3000/:id로 치고 들어가면 해당 req.params를 가져온다.
위의 경우 콘솔에는 id가 찍히게 된다.
단 매개변수를 준 라우터는 코드상 다른 라우터들 보다 가장 마지막에 위치해야 한다.
ex)
router.get('/:index,(req,res)=>{
    console.log(req.params)
})
router.get('/sub',(req,res)=>{
    console.log('실행되지 않음')
    // 이 라우터는 현재는 실행되지 않음
    // 실행가능하게 하려면 '/:index'를 준 라우터보다 위에 위치해야 한다.
})
*/
// req.params로 받을 수 있다.

// 쿼리스트링
//경로 뒤에 :id 이런 식으로 매개변수를 주고 req.param를 통해 해당 값을 받는 것과 같다.
// 경로 뒤에 ?id=algml 이와 같이 키=값 형식으로 주고 req.query로 해당 값을 받는다.

