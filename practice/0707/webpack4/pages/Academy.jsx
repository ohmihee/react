import React,{Component} from 'react'
//import {Link} from 'react-router-dom'
import '../css/Academy.css'
import SubMenu from '../component/SideMenu'
import MainMenu from '../component/MainMenu'
import PrivacyPolicy from '../component/PrivacyPolicy'
import ConsultInfo from '../component/ConsultIfon'
import Banner from '../component/Banner'

class Academy extends Component{
  
    render(){
        return(
            <>
                <ul className="menubar_row">
                    <center>
                        <MainMenu/>
                    </center>
                </ul>
                <div id="banner">
                    <Banner/>          
                </div>
                <div id="main">
                    <SubMenu/>
                    <div id="mainContent">
                        <ul>
                            <li><h2>상담게시판</h2></li>
                            <li>
                                <PrivacyPolicy/>
                            </li>
                            <li>
                                <ConsultInfo/>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Academy