export const initalState = {
    posts:[],
    postDetail:null,
    loadding:false,
    // 로딩에 대한 상태값을 변수로 만든 것
}

// REDUX ACTIONS
// 상수명으로 바꾸어서 주는 것이 나중에 오류 발생시 오류를 찾기 쉽다.
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST"
export const GET_POSTS_SUCCESS ="GET_POSTS_SUCCESS"
export const GET_POST_FAIL ="GET_POST_FAIL"

export const GET_POSTS_DETAIL_REQUEST = "GET_POSTS_DETAIL_REQUEST"
export const GET_POSTS_DETAIL_SUCCESS ="GET_POSTS_DETAIL_SUCCESS"
export const GET_POST_DETAIL_FAIL ="GET_POST_DETAIL_FAIL"









export const GET_POST = () => {
    console.log('reducer - getpost')
    return{
        type:GET_POSTS_REQUEST
    }
}

export const GET_POST_DETAIL = data => {
    return{
        type:GET_POSTS_DETAIL_REQUEST,
        data
    }
}


const reducer = (state=initalState,action) => {
    switch(action.type){
        case GET_POSTS_REQUEST:
            console.log('reducer - getpost_request')
            return{
                ...state,
                loadding:true
            }
        case GET_POSTS_SUCCESS:
            //console.log('도착????==============================')
            console.log('getpostrequest이후의 reducer-post-getpostsuccess')
            return{
                ...state,
                posts:[...state.posts,...action.data],
                loadding:false
            }
        case GET_POST_FAIL:
            return{
                ...state,
                loadding:false
            }
        case GET_POSTS_DETAIL_REQUEST:
            return{
                ...state,
                loadding:true
            }
        case GET_POSTS_DETAIL_SUCCESS:
            return{
                ...state,
                loadding:false,
                postDetail:action.data
            }
        case GET_POST_DETAIL_FAIL:
            return{
                loadding:false
            }
        default :
            return {
                ...state,
                loadding:false
            }
    }
}

export default reducer