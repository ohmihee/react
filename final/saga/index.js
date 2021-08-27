import {all,fork} from 'redux-saga/effects'
import postSaga from './postSaga'


export default function* rootSaga(){
    yield all([
        fork(postSaga)
        //fork는 실행시킨다.
    ])
    // fork제외 모든 saga 함수앞에는 yield 사용
}