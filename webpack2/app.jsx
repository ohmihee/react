import React,{Component} from 'react'
import ClassComp from './Component/ClassComp'
import FuncComp from './Component/FuncComp'
import NavBar from './Component/ex'


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

//module.exports - require   => node.js
//export default - import  => js  / babel 때문에 가능