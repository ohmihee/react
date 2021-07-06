import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';   //App.js의 내용을 불러옴



ReactDOM.render(// App을 불러와서 render함 
  <React.StrictMode>   
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
// 위 root는 public의 index.html파일 안에 존재

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

