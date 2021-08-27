import React from 'react'

const rootReducer = (state,action) => {
    switch(action.type){
        case "":
            return{
                ...state
            }
        default:
            return state
    }
}

export default rootReducer