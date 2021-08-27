import { apply } from '@redux-saga/core/effects'
import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
// applyMiddleware
// compose
// createStore 

import { composeWithDevTools } from 'redux-devtools-extension'
import { createSaga } from 'redux-saga'
import reducer from '../reducers'
import rootsaga from '../saga'

const configureStore = () => {
    const sagaMiddlewares = createSaga()
    const Middlewares = [sagaMiddlewares]
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...Middlewares))
    // development 일때는 아래의 내용을 실행
    : composeWithDevTools(applyMiddleware(...Middlewares)) 
    const Store = createStore(reducer,enhancer)
    Store.sagaTask = sagaMiddlewares.run(rootSaga) // server side rendering
    //Store.sageTask = sagaMiddlewares.run(rootSaga)
    return Store

}

const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV === 'development'
})

export default wrapper