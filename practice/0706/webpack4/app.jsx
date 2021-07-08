import React,{Component} from 'react'
import Navbar from './component/Navbar'



class App extends Component{
    render(){
        return(
            <>
                <Navbar/>
            </>
        )
    }
}

export default App

//module.exports - require   => node.js
//export default - import  => js  / babel 때문에 가능