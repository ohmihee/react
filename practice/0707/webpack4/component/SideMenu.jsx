import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/Academy.css'

class SideMenu extends Component{
    state = {
        submenu : [
            {
                id:1,
                url:'/',
                text:'상담게시판'
            },
            {
                id:1,
                url:'/',
                text:'지원하기'
            },
            {
                id:1,
                url:'/',
                text:'자주묻는질문'
            },

        ]
    }
    render(){
        return(
            <div id="subBoard">
                <h3>상담신청</h3>
                <ul>
                    {
                        this.state.submenu.map(item=>{
                            const {id,url,text} = item
                            return(
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })
                    }
                </ul>     
            </div>
        )
    }
}

export default SideMenu