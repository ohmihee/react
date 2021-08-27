export const initalState = {
    posts:[],
    postDetail:null,
    loadding:false,
    // 로딩에 대한 상태값을 변수로 만든 것
}

// REDUX ACTIONS
// 상수명으로 바꾸어서 주는 것이 나중에 오류 발생시 오류를 찾기 쉽다.
export const GET_POSTS_REQUEST = "GET_POSTs_REQUEST"
export const GET_POSTS_SUCCESS ="GET_POSTS_SUCCESS"
export const GET_POST_FAIL ="GET_POST_FAIL"

export const GET_POST = () => {
    return{
        type:GET_POSTS_REQUEST
    }
}


const reducer = (state=initalState,action) => {
    switch(action.type){
        case GET_POSTS_REQUEST:
            return{
                ...state,
                posts:[...state.posts,...action.data],
                loadding:true
            }
        case GET_POSTS_SUCCESS:
            return{
                ...state,
                loadding:false
            }
        case GET_POST_FAIL:
            return{
                ...state,
                loadding:false
            }
        default :
            return state
    }
}