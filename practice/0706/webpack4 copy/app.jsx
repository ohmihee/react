import React,{Component} from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Academy from './pages/Academy'



class App extends Component{
    render(){
        return( //<BrowserRouter>는 <div>와 같은 최상위 element로 보면 된다.
            <>
                <BrowserRouter>
                    <Navbar/>
                    {/* 여기서부터 내용보이는 영역 */}

                    <Switch>
                        {/* 조건에 따라 무엇을 하겠다. */}
                        {/* exact반드시 써주어야 한다. */}
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/academy" component={Academy}/>
                        {/* 해당 경로로 들어오는 경우에만 그에 일치하는 component를 실행하겠다. */}
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

export default App

//module.exports - require   => node.js
//export default - import  => js  / babel 때문에 가능