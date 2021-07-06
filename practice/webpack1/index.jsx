const React = require('react')
const ReactDOM = require('react-dom')
const LoginBox = require('./loginBox')
const {Component} = React
/*
위에와 아래는 같은 역할
import React from 'react'
import React,{Component} from 'react'
// import는 한 번에 여러가지 가능
import LoginBox from './loginBox.jsx'
*/
/*
import React,{Component} from 'react'
*/
//import << javascript version nodejs
//require << nodejs처리가 되는 아이

class App extends React.Component{
    render(){
        return(
            <>
                <div>hello babel</div>
                <LoginBox/>
            </>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
