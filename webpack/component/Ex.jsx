import React, { Component } from 'react';
//import '../css/Navbar.css'
import { FaFacebook, FaInstagram, FaTwitter ,FaBars,} from 'react-icons/fa'
import { ImCross} from 'react-icons/im'


class Navbar extends Component {

  constructor(props){
  super(props);
  // props를 통해 data를 전달받는다.

  this.submenuRef = React.createRef();
  /* 
  //this.을 사용하기 위해서는
  constructor(props){
    super(props)
  } => 이와 같이 먼저 작성해주어야 한다. 
  */

  // React.는 React라이브러리를 사용하기 위한 기본
  this.state = {
    clickedSub:0, 
    toggle: true, 
    
    social: [
      {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
      },
      {
        id: 2,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />
      },
      {
        id: 3,
        url: 'https://www.instagram.com',
        icon: <FaInstagram />
      }
    ],

    menu : [
      {
        id:1,
        url:'/', 
        text:'COMPANY',
        submenu:['회사개요','인사말','연혁','경영철학','CI','오시는길'],
      },
      {
        id:2,
        url:'/', 
        text:'BUSINESS',
        submenu:['사업안내','사업자 소개','사업문의','견학문의'],
      },
      {
        id:3,
        url:'/', 
        text:'R&D',
        submenu:['종합기술원','연구성과'],

      },
      {
        id:4,
        url:'/', 
        text:'ESG',
        submenu:['환경경영','사회공헌','윤리경영','컴플라이언스','지배구조'],

      },
      {
        id:5,
        url:'/', 
        text:'PR',
        submenu:['보도자료','홍보영상','광고','콜마사랑'],

      },
      {
        id:6,
        url:'/', 
        text:'IR',
        submenu:['재무정보','주식정보','공시정보','보고서','공고사항'],

      },
    ]
  }

  }
  
  handleToggle(){
    this.setState({
      toggle : !this.state.toggle,
      clickedSub:0,
    }); 
  }

  click_menu(id){
    if(id==this.state.clickedSub){
      this.setState({
        clickedSub:0
      })
    }else{
      this.setState({
        clickedSub:id,
      })
    }
  }

  componentDidUpdate(){   
    const submenuBox = this.submenuRef.current
    if(submenuBox!==null){
      const clientRect = submenuBox.getBoundingClientRect();
      const maxHeight = clientRect.height;
      
      submenuBox.style.height=0
      let nowHeight = 0; 
      let dropdown =setInterval(()=>{
        if(nowHeight===maxHeight-2){
          clearInterval(dropdown)
        }
        nowHeight+=2; 
        submenuBox.style.height=nowHeight+'px'
        
      },1)
    }
  }




  show_submenu(item){
    return(
      <>
      <ul className='sub_menu' ref={this.submenuRef}  >
        {item.map((v,i)=>{ 
          return(
            <li key={i}>
              <a href="/">{v}</a>
            </li>
          )
        })}
      </ul>

      </>
    )
  }

  show_side_nav(){ 
    return(
      <div className='side_nav'>
        <ul >
        {
                this.state.menu.map(item => {
                  let { id, text, submenu } = item; 
                  
                  return (
                    
                    <li key={id} >
                      <span onClick={()=>{this.click_menu(id)}}>{text}</span>
                      {id === this.state.clickedSub && this.show_submenu(submenu)} 
                    </li>
                    
                  )
                })
              }  
        </ul>
      </div>
    )
  }


  render() {
    return (
      <nav>
        <div className='nav-center'>
          {/* Logo */}
          <div className='nav-header'>
            <h1 className='logo'>Logo</h1>
            <button className='nav-toggle' onClick={()=>{this.handleToggle()}}>
              {this.state.toggle ? <FaBars/>  : <ImCross />}
            </button>
          </div>
          {!this.state.toggle && this.show_side_nav() }
          <div className='links-container'>
            <ul className='links'>
            {
              this.state.menu.map(item => {
                let { id, url, text } = item
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })
            }
            </ul>
          </div>
          <ul className='social-icons'>
            {
              this.state.social.map(item => {
                let { id, url, icon } = item
                return (
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


