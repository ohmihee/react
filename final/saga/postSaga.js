import {all,fork,takeLatest,call,put} from 'redux-saga/effects'
import axios from 'axios'
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POST_FAIL,
    GET_POSTS_DETAIL_REQUEST,
    GET_POSTS_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAIL
} from '../reducer/post'

let BaseURL = process.env.NODE_ENV.backurl||'https://jsonplaceholder.typicode.com'
//let BaseURL = process.env.NODE_ENV.backurl||'http://localhost:3001'

async function getPostAPI(data=''){
    console.log('saga-postSaga-getpostApi')
    const response = await axios.get(`${BaseURL}/posts/${data}`)
    return response
}
// 위의 함수는 saga함수가 아니므로 비동기 통신을 위해 async await 사용

function* getPosts(){
    // API통신 즉 web server랑 통신을 할 것이다. fetch와 axios존재
    try{
        console.log('saga -postsaga-getpost')
        const {data} = yield call (getPostAPI)
        console.log('saga-postSaga-getpostApi이후의 getpost')
        // call은 fork와 같은 기능을 하는데 다만 비동기로 작업시에는 주로 call 사용
        // saga에서는 비동기통신의 경우에도 async await사용하지 않고 대신 yield가 해당 기능을 대체 
        //console.log(data,'dataaaaaaaaaaaaaaaaaaaa')
        yield put({
            type:GET_POSTS_SUCCESS,
            data
        })
        // put은 dispatch와 같은 역할.
    }catch(e){
        yield put({
            type:GET_POST_FAIL,
            data:'ERROR'
        })
    }
    yield
}

function* getPostDetail(action){
    try{
        const {data} = yield call (getPostAPI,action.data)
        yield put({
            type:GET_POSTS_DETAIL_SUCCESS,
            data
        })
    }catch(e){
        yield put({
            type:GET_POST_DETAIL_FAIL,
            data:'ERROR'
        })
    }
}






function* watchPosts(){
    console.log('saga-postSaga-watchpost')
    yield takeLatest(GET_POSTS_REQUEST,getPosts)
    // 마지막으로 입력된 이벤트의 값만 실행하도록 하는 함수 
    // 첫번째 인자값 -> 어떤 action에서 실행?
    // 두번째 인자값 -> 첫번째 인자값의 action에서 실행할 함수
    /*
    아래의 내용을 saga로 짠 것이 위의 코드
    //
    if(action.type=="GET_POST_REQUEST"){
        getPosts()
    }
    */
}
function* watchPostDetail(){
    yield takeLatest(GET_POSTS_DETAIL_REQUEST,getPostDetail)
}

export default function* postSaga(){
    yield all([
        fork(watchPosts),
        //fork는 인자값으로 준 것을 실행
        fork(watchPostDetail)
    ])
}