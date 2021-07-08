import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/Academy.css'
import SubMenu from '../component/SideMenu'
import MainMenu from '../component/MainMenu'

class Academy extends Component{
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
            <>
                <ul className="menubar_row">
                    <span>
                        <img src="http://www.kiweb.or.kr/images/main_new/logo_new_2018.png"/>
                    </span>
                    <center>
                        <MainMenu/>
                    </center>
                </ul>
                <div id="banner">
                    <h2>consulting</h2>

                </div>
                <div id="main">
                    <SubMenu/>
                    <div id="mainContent">
                        <ul>
                            <li><h2>상담게시판</h2></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Academy