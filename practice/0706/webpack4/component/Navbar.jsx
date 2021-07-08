import React,{Component} from "react";
import '../css/Navbar.css'
import {FaFacebook,FaInstagram,FaTwitter,FaBars} from 'react-icons/fa'

class Navbar extends Component{
    state = {
        status:false,
        social : [
            {
                id:1,
                url:'https://www.twitter.com',
                icon:<FaTwitter/>
            },
            {
                id:2,
                url:'https://www.facebook.com',
                icon:<FaFacebook/>
            },
            {
                id:3,
                url:'https://www.instagram.com',
                icon:<FaInstagram/>
            }
        ],
        menu : [
            {
                id:1,
                url:'/',
                text:'home'
            },
            {
                id:2,
                url:'/',
                text:'about'
            },
            {
                id:3,
                url:'/',
                text:'projects'
            }
        ],
        detailMenu : [
            {
                id:1,
                url:'/',
                text2:'detailhome'
            },
            {
                id:2,
                url:'/',
                text2:'detailabout'
            },
            {
                id:3,
                url:'/',
                text2:'detailproject'
            }
        ]
    }

    menuState = () => {
        this.state.status ? this.setState({status:false}):this.setState({status:true})
        console.log(this.state.status)
        return this.state.status
    }
    render(){
        return(
            <nav>
                <div className="nav-center">
                    {/*logo */}
                    <div className="nav-header">
                        <h1 className="logo">logo</h1>
                        {this.state.status?<button className="nav-toggle" onClick={this.menuState}>x</button>:<button className="nav-toggle" onClick={this.menuState}><FaBars/></button>}
                    </div>
                    {/*navigation */}
                    <div className={this.state.status?"links-container show":"links-container"}>
                        <ul className="links">
                            {
                                this.state.menu.map(item=>{
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
                    {/* social - content */}
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
                    {/* <ul className="menu-icons">
                        {
                            this.state.menu.map(item=>{
                                const {id,url,text} = item
                                return(
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                        }

                    </ul> */}
                </div>
            </nav>
        )
    }
}

export default Navbar