import React,{Component} from 'react'
import Navbar from './component/Navbar'
//import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import Home from './pages/Home'
//import About from './pages/About'
//import Projects from './pages/Projects'
import Academy from './pages/Academy'



class App extends Component{
    render(){
        return( //<BrowserRouter>는 <div>와 같은 최상위 element로 보면 된다.
            
            <>
            
                <Academy/>
               
            </>
            
        )
    }
}

export default App

//module.exports - require   => node.js
//export default - import  => js  / babel 때문에 가능