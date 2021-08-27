import React,{Component} from 'react'
//import '../css/Navbar.css'
import NavToggle from './NavToggle'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    state = {
        social:[
            {
                id:1,
                url:'https://www.twitter.com',
                icon:'icon'
            }
        ],
        menu:[
            {
                id:1,
                url:'/',
                text:'home'
            },
            {
                id:2,
                url:'about',
                text:'about'
            },
            {
                id:1,
                url:'/projects',
                text:'projects'
            },
        ],
        showLinks:false
    }

    // showLinks false => links-container
    // showLinks true => links-container on
    showContainer = () => {
        let className = this.state.showLinks ? 'links-container on':'links-container'
        /* 
            let className
            if(this.state.showLinks){
                className -= 'links-container on'
            }else {
                className = 'links-container'
            }
        */
       return className
    }

    handleToggle = () => {
        this.setState({showLinks:!this.state.showLinks})
    }

    render(){
        return(
            <nav>
                <div className="nav-center">
                    <div className="nav-header">
                        <h1 className="logo">Logo</h1>
                        <NavToggle toggle={this.handleToggle}/>
                    </div>

                    {/* Navigation */}
                    <div className={this.showContainer()}>
                        <ul className="links">
                            {
                                this.state.menu.map(item=>{
                                    let {id,url,text} = item
                                    return(
                                        <li key={id}><Link to={url}>{text}</Link></li>
                                    )
                                    // 위에는 react에서 링크걸때
                                    // next에서 링크 걸때
                                    // ex) return <li key={v.id} onClick={handleToggle}><Link href={v.url}><a>{v.category}</a></Link></li>
                                })
                            }
                        </ul>
                    </div>
                    {/* social-icons */}
                    <ul className="social-icons">
                        {
                            this.state.social.map(item=>{
                                let {id,url,icon} = item
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