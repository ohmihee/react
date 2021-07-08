import React,{Component} from 'react'

import '../css/Academy.css'

class SideMenu extends Component{
    state = {
        menubar : [
            {
                id:1,
                url:'/',
                text:'학교소개'
            },
            {
                id:2,
                url:'/',
                text:'교육과정'
            },
            {
                id:3,
                url:'/',
                text:'취업정보'
            },
            {
                id:4,
                url:'/',
                text:'커뮤니티'
            },
            {
                id:5,
                url:'/',
                text:'상담신청'
            },
        ],
    }
   
    render(){
        return(
            <span>
                {
                    this.state.menubar.map(item=>{
                        const {id,url,text} = item
                        return(
                            <li key={id} >
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })
                }
            </span>
        )
    }
}

export default SideMenu