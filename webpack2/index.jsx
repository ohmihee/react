import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './css/index.css'
// index.jsx 즉 현재 파일을 기준으로
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



ReactDOM.render(
    <App />,
    document.querySelector('#root')
)