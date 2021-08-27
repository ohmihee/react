/*
import React,{Component} from 'react'
import ClassComp from './Component/ClassComp'
import FuncComp from './Component/FuncComp'
import NavBar from './Component/NavBar'


class App extends Component{
    render(){
        return(
            <>
                <NavBar/>
                <h1>hello world!!!!</h1>
                <ul className="Comp">
                    <ClassComp/>
                    <FuncComp/>
                    <ClassComp/>
                    <FuncComp/>
                    
                </ul>
            </>
        )
    }
}

export default App

*/
//module.exports - require   => node.js
//export default - import  => js  / babel 때문에 가능


//NavBar 볼때 app.jsx => Router필요해서
import React,{Component} from 'react'
import Navbar from './component/NavBar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

class App extends Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Navbar/>
                        {/* // 여기서부터 내용 보이는 영역 */}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" component={Projects}/>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

export default App


