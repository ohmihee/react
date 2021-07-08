import React, {Component} from 'react'
import '../css/Navbar.css'
import {FaFacebook,FaInstagram,FaTwitter,FaBars} from 'react-icons/fa'
import NavToggle from './NavToggle'
import {Link} from 'react-router-dom'
// 위의 Link를 a tag 대신 사용시 링크를 통해 렌더링하는 것이 아니라 해당 컴포넌트를 

class Navbar extends Component {
    state = {
        social : [
            {
                id:1,
                url:'https://www.twitter.com',
                icon:<FaTwitter />
            },
            {
                id:2,
                url:'https://www.facebook.com',
                icon:<FaFacebook />
            },
            {
                id:3,
                url:'https://www.intstagram.com',
                icon:<FaInstagram />
            },
        ],

        menu: [
            {
                id:1,
                url:"/",
                text:"home"
            },
            {
                id:2,
                url:"/about",
                text:"about"
            },
            {
                id:3,
                url:"/projects",
                text:"projects"
            },
            {
                id:4,
                url:"/academy",
                text:"academy"
            }
        ],
        showLinks:false,
    }

    showContainer = () =>{
        let className = this.state.showLinks ? "links-container on":"links-container"
        return className;
    }

    handleToggle =  ()=>{
        this.setState({showLinks:!this.state.showLinks}) //불리언값을 반대로 바꿔주는 것!!!!
    }

//{this.handleToggle} => 함수자체를 넘긴 것

    render(){
        return(
            <nav>
                <div className="nav-center">
                    <div className="nav-header">
                        <h1 className="logo">Logo</h1>
                        <NavToggle toggle={this.handleToggle}/> 
                    </div>
                    <div className={this.showContainer()}>
                        <ul className="links">
                            {
                                this.state.menu.map(item=>{
                                    const {id,url,text} = item
                                    return(
                                        <li key={id}>
                                            {/* <a href={url}>{text}</a> */}
                                            <Link to={url}>{text}</Link>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>   
                    <ul className="social-icons">
                        {
                            this.state.social.map(item=>{
                                const {id,url,icon} = item
                                return(
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar