import React,{Component} from 'react'
import LoginBox2 from './LoginBox2'
import UserContext from '../store/User'

class A extends Component{
    state = {
        loginTxt:'login',
        user:{
            userid:'algml0703',
            name:'algml',
            job:'student'
        }
    }

    render(){
        return(
            <>
                <UserContext.Provider value={this.state.user}>
                    <LoginBox2 v={this.state.loginTxt}/>   {/*JSX영역에서 javascript를 사용하려면 {}*/}
                </UserContext.Provider>
            </>
        )
    }
}

export default A