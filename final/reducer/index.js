import React from 'react'
import HYDRATE from 'next-redux-wrapper'
import { combineReducers} from 'redux'
import post from './post'

const rootReducer = (state,action) => {
    switch(action.type){
        case HYDRATE:
            return action.payload
        default:
            const combineReducer = combineReducers({
                post, // 내가 만들 것
                // user,
            })
            return combineReducer(state,action)
    }
}

export default rootReducer