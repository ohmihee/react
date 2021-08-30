const express = require('express')
const router = express.Router()
const {Comment} = require('../../models')

//postman 이용하려면 서버 키고
// GET /api/comment
router.get('/',async(req,res,next)=>{
    try{
        const data = await Comment.findAll({}) 
        res.json(data)
        // 응답을 json형태의 데이터로 전달
    } catch (error) {
        console.error(error)
        next(error)
    }
})

// POST /api/comment
router.post('/',async(req,res,next)=>{
    const {userid,content} = req.body
    try{
        const data = await Comment.create({
            userid,
            content
        })
        // data라는 변수에 담아
        res.json(data)
        // 데이터 전달
    } catch (error) {
        console.error(error)
        next(error)
    }
})

// parameter
// 유동적인 url
// /api/comment/10[가변적으로변하는값]   => 테이블의 고유 키값을 url에 주어서 가변적으로 변하도록
// '/:변수명'
/*
router.delete('/:id',async(req,res,next)=>{
    const id =  req.params.id
    // const {id} = req.params
    // ('/:변수명')
    // const 변수명 =  req.params.변수명
})
*/
router.delete('/:id',async (req,res,next)=>{
    const {id} = req.params
    try{
        const data = await Comment.destroy({
            where:{id}
        })
        
        const result = data >=1 
        ? {result:'SUCCESS' , msg:"댓글이 삭제되었습니다."}
        : {result:'ERROR', msg:"서버오류가 발생되었습니다." }

        res.json(result)
    } catch(error) {
        console.error(error)
        next(error)
    }
})

// 수정하려는 것에 해당하는 부분만 url로 받음
// PATCH /api/comment/[params]
router.patch('/:id',async (req,res,next)=>{
    const {id} = req.params
    const {content} = req.body

    try {
        const data = await Comment.update({
            content
            //  content:content
            // content에 content를 넣겠따.
        },{
            where:{id}
            // where:{id:id}
        })

        // 삼항연산자
        // 1개이상 수정시 true에 해당하는 result:"SUCCESS"부분을 실행
        const result = data[0] >= 1
        ? {result:'SUCCESS', msg:'댓글이 수정되었습니다.',count:data[0]}
        : {result:'ERROR', msg:'서버오류가 발생되었습니다.',count:data[0]}
        /*
        const result
        if(data>=1){result = {result:"SUCCESS",msg:"댓글이 삭제되었습니다."}}
        else{result = {result:"ERROR",msg:"서버오류가 발생했습니다."}}
        */
    
        res.json(result)
    } catch(error) {
        console.error(error)
        next(error)
    }
})



module.exports = router
