# blog폴더 생성
1. blog폴더 내부에 back / front 폴더 생성

# 작업할 디렉토리에 접근

# npm init -> node.js 환경으로 만들어줌

# npm install next react react-dom

# package.json 수정
/* 
// "scripts"부분에 아래 내용 추가
    "dev":"next dev -p 3001 -H 0.0.0.0",  // dev서버실행시 명령어
    "build":"next build",                 // 배포시 build를 위한 명령어
    "start":"next start",                 // 서버 시작을 위한 명령어
    "lint":"next lint"                    // 
*/

# front 폴더 안에 pages폴더 생성
    want => url이 localhost:3001/ 일때 hello world출력
    whatToDo
    => pages 폴더 안에 index.jsx 파일 생성
    /*
            const Index = () =>{
                return(
                    <>
                        hello Next
                    </>
                )
            }
            export default Index
    */


** 노트북이나 같은 와이파이 사용시=====================
- cmd창에 ipconfig입력 -> IPv4주소:3001  휴대폰으로 확인가능
 
 ** 폴더구조
 - pages폴더
    - index.jsx  => 메인페이지  // localhost:3001에 들어오면 가장 먼저 보여지는 페이지
    - join.jsx   => 회원가입
    - login.jsx  => 로그인페이지
    - posts폴더
        - post.jsx   => 글쓰기 페이지  // localhost:3001/posts/post

# 동적 라우팅
** 동적라우팅사용법
1. 파일명을 배열형식으로 만든다.          ex)  [posts].jsx
/*
            import {useRouter} from 'next/router'
            const Posts = () => {
                const router = useRouter()
                const {posts} = router.query 
                return(
                    <>
                        {posts} 페이지입니다.
                    </>
                )
            }
            export default Posts
*/

# 레이아웃 구성
1. components 폴더 생성
1-1.  BlogLayout.jsx 파일 생성
** 한가지 레이아웃으로만 사이트 구성시 사이트가 단조롭고 딱딱하게 느껴짐 <-> 대신에 간편하고 빠른 개발 가능
** 때문에 여러 레이아웃을 활용하면 좀 더 동적인 사이트 구성 가능 <-> 대신에 더욱 많은 시간과 노동력 필요 
1-2. FormLayout.jsx 파일 생성
 // pages폴더의 join.jsx에 적용
 // pages폴더의 login.jsx에 적용

** 레이아웃 구성을 작업 시작 전에 해두는 것이 좋다.
    
# 컴포넌트 사용
1. pages폴더의 내부 파일에서 컴포넌트를 불러와(import) 사용

## Link 컴포넌트 사용 <-> React에서의 Link와 사용법이 조금 다름
/*
        <li>
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
        </li>
*/
1. React에서 Link사용
       ex) react -> <Link to="/">menu<Link>
2. Next에서 Link사용
    import Link from 'next/link' 
       ex) next.js -> <Link href="/"><a>menu</a><Link>

# next에서는 index.html이 없음 -> react가 알아서 관리

# html파일에 있는 head부분 관리하는 방법??
import Head from 'next/head'  -> Head를 가져옴
<Head>
// head 태그 생성 후에 그 안에 넣고자 하는 Head의 태그 사용
ex)
<title>Blog</title>
</Head>

## 메타태그(Meta Tag) 오픈그래프(OG) 사용  => 인터넷 검색
https://velog.io/@byeol4001/Meta-Tag-OG%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

# app.jsx
=> Next의 모든 컴포넌트를 실행하기 전에 거쳐가는 컴포넌트 
=> 즉 app.jsx에서 HEAD태그 사용시 모든 컴포넌트에 공통적으로 적용됨
or 공통적으로 들어가는 css 등의 경우 app.jsx에 넣기!!!!!!!!!

**app.jsx 생성
=> pages폴더 내에 _app.jsx 파일 생성

ex) _app.jsx Head부분의 링크는 구글폰트를 가져와서 사용 -> _app.jsx파일 index.css 파일에서 내용 확인

# 이미지 넣기
1. front폴더에 public폴더 생성
2. 해당 public폴더에 이미지 넣어주기
3. index.jsx파일에서 사용 -> index.jsx파일 확인

# module.css를 이용하여 css 적용
- components폴더 안의 FormLayout.module.css파일
- 사용시에는 사용하려는 파일에 import styled from '/FormLayout.module.css'이와 같이 불러와서 사용 -> 해당 파일을 객체처럼 만들어서 가져와준다. 
ex) 사용 ?? className={styled.footer} 이와 같이 사용

## npm install styled-components
/*
ex)NavToggle.jsx 파일 확인
import Styled from 'styled-components'
const Toggle = Styled.div`
    background:transparent;
    border-color:transparent;
`
*/

* 새로고침시마다 css스타일 풀리는 현상
# Styled Components 환경설정 : 새로고침해도 css스타일이 풀리지 않도록 하는 기본 설정
1. pages폴더 안에 _documents.jsx파일 생성
/*
import Document from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document{
    static async getInitialProps(ctx){
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.rednerPage

        try{
            ctx.renderPage = () => {
                originalRenderPage({
                    enhanceApp:(App)=>(props)=>
                        sheet.collectStyles(<App {...props}/>),
                })
            }
            const initalProps = await Document.getInitalProps(ctx)

            return{
                ...initalProps,
                styles:(
                    <>
                        {initalProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        }finally{
            sheet.seal()
        }
    }
}
*/

2. front폴더에 .babelrc파일 생성
/*
{
    "presets":["next/babel"],
    "plugins":[["styled-components",{"ssr":true}]]
    // 배열안에 배열 넣고 첫 번째 값은 string 두번째 값은 객체
    // [[string,{}]]
}
*/
**위와 같이 해서 잘 안 되는 경우 아래를 다시 설치해서 해보기
 npm install -D babel-plugin-styled-components
 npm install next

 ** styled-components 장점 
 -> css코드에 js코드 작성 가능
 ?
 /*
 // components의 NavToggle파일 참고
 import Styled from 'styled-components'
 const Accordion = Styled.div`
    position:absolute;
    width:100%;
    left:0px;
    top:10vh;
    z-index:5;
    background:#fff;
    padding:7vh 0;

    display:${
        props => (props.flag ? 'block' : 'none')
    }
    // 삼항연산자
    // props.flag값이 true이면 display:'block' 
    // props.flag값이 false이면 display:'none' 적용

    & > ul{
        display:flex;
        flex-direction:column
    }
    // 자기 자신 안의 ul에 display:flex; flex-direction:column을 적용
 `
 */

* styled-components에서는 css 작성후 반드시 ;로 끝맺음

# 기본적 코드 - pra붙임
* useState -> loginpra.jsx 파일 참고

# custom hook - login.jsx파일 참고
-> 반복적인 코드를 줄여주기
* 
/*
const useInput = (defaultValue) => {
    const [value,setValue] = useState(defaultValue)
    const onChange = e => {
        const {value} = {...e.target}
        setValue(value)
    }
    return{
        value,
        onChange
        // value:value로 onChange:onChange함수를  return
    }
}
*/

* 
// custom hook 사용 =>
/*
const Login = () => {
    const userid = useInput('')
    const userpw = useInput('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(userid.value, userpw.value)
    }

    return(
        <>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" {...userid} placeholder="아이디를 입력하세요">
                <input type="password" {...userpw} placeholder="비밀번호를 입력하세요">
            </form>
        <>
    )
}
*/ 


* babel이 js영역에서 <>안의 부분은 html코드처럼 사용가능하게 만들어줌
* <> 안에서 다시 js코드 사용을 위해서는 {}안에 js코드 작성
//ex)
/*
<input type="text" {...{"value":"ok"}}>
// => input박스의 값이 ok로 출력됨
// value='ok'  =  {...{"value":"ok"}}
*/  


# context
pages폴더의 _app.jsx파일 참고
components폴더의 BlogLayout.jsx파일 참고

 # react는 state 즉 상태값이 바뀐 경우에만 render해준다.
 => context사용시 reducer를 같이 사용하는 이유

 ** store와 hooks는 front폴더안에 생성


* 코드는 가능한 하나의 파일에 하나의 기능만 담당하게끔 파일을 나누어 주는 것이 좋다
-> 코드의 가독성 등을 위해
=> 파일을 나눌수록 파일 구조를 잘 파악할 수 있도록 해야함

# join.jsx
// 비밀번호 확인은 hooks로 만들기가 어렵다. => custom hooks로 하려하지말고 해당 파일에 그냥 코드를 작성하는 것이 오히려 더욱 효율적

*  html에서 label이나 img alt 등은 시각장애인 등 모든 사람에게 웹 접근성을 높이기 위한 일환

* NavToggle에서 Accordion부분을 아예 파일로 하나로 만들어서 관리 -> 코드를 깔끔하게 하기 위함
// Accordion.jsx파일을 만들고 해당 파일을 NavToggle.jsx에서 불러와서 사용
// 이때 상태값을 다시 전달해주어야 한다.
// 상태값 전달 -> NavToggle.jsx Accordion.jsx  => visible={visible}, Accorion.jsx파일에서 {visible}를 Accordion의 인수로 넣어 값전달하는 것 등 참고

* Accordion에서 category를 map으로 처리



====================================================================================================================================================

react 
-> 한페이지 -> 컴포넌트가 바뀌면서 내용이 바뀌는 형식 -> 대형포털인 네이버에서 검색노출이 안됨
=> 해결방안 : (next) server side rendering 
** 리엑트 방식 -> csr(client side rendering)
** 기존 익스프레스 방식 -> ssr : server side rendering   
** next방식 -> 최초에는 ssr 이후부터는 csr  => 네이버 검색엔진에 걸리지 않는 문제 해결

Next 설치====================================================================================
1. npm init
2. npm install next react react-dom
// 리엑트  (웹팩포함하여) 관련 기본적 개발환경 세팅(설치됨)
3. package.json 수정
/*
//"scripts"부분
"dev":"next dev",      // dev 서버 (개발모드로 ) 기본적으로 port3000으로 설정되어 있음
-> -p 3001             // port번호가 꼬이는 것을 방지하기 위한 코드, dev서버를 3001번 포트로 이용하겠다.
-> -H 0.0.0.0          // 노트북이나 같은 와이파이 번호 사용시 휴대폰으로 내용확인 가능
"build":"next build",  // 실서버 build 를 위한 명령어
"start":"next start",  // next가 자체적으로 가지고 있는 웹서버를 실행하는 명령어
"lint":"next lint"     // 향후 설명
*/

Next 사용법=======================================================================
1. 폴더 안에 pages폴더 생성
-> pages폴더 안에 index.jsx 파일 생성
-> react문법 똑같이 사용가능
/*
const Homepage = () => {
    return(
        <>
            hello Next
        </>
    )
}

export default Homepage
*/
// npm run dev 실행  ->  3001번으로 설정한 포트에서 next실행
2. pages폴더안에 파일을 만드는 것 만으로 라우터 기능 
** import react from 'react' 이런 것도 필요없음

