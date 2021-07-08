import React,{Component} from 'react'
// React를 사용하지 않는데 가져오는 이유?
// return을 react.createElement처럼 사용하기 위해 React를 가져옴
import '../css/NavToggle.css'

class NavToggle extends Component{
    render(){
        return(
            // jsx에서 for문을 사용하기 위해서는  htmlFor을 사용 => 이는 babel이 처리해주기 때문에 가능
            //()가 있고 없고의 차이는 함수의 실행 여부 ()를 쓰면 코드 작성시 해당 함수를 바로 실행
            // ()가 없을 때는 해당 이벤트 발생시에 함수가 실행됨
            // onClick={()=>this.props.toggle()}
            // onClick={this.props.toggle}
            <>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" onClick={()=>this.props.toggle()}/>
                
                <label htmlFor="nav-toggle"> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </>
        )
    }
}


export default NavToggle


