# Next 사용하기

1. npm init
2. npm install next react react-dom
3. pages폴더 생성
4. pages폴더에 index.jsx 파일 생성
5. package.json 파일에서 script 부분 내용 추가
// 보통 github에 기본적인 환경세팅을 해두고 사용시에 받아서 사용하는 것이 효율적
// react뿐만이 아니라 react,next,redux 등등에서
6. _pages폴더에 _app.jsx 파일 생성 _app.jsx파일의 인자값으로 기존 Component만에서 pageProps를 추가
7. pages폴더에 _document.jsx파일 생성 (코드 복붙) -styled component할 때 serverside rendering 안되어서 css를 서버사이드렌더링으로 처리하려고 코드를 복붙함
// npm install styled-components
8. .babelrc파일 생성 서버사이드렌더링 css처리하기 위해서 추가적인 바벨설정을 함
//npm install babel-plugin-styled-components

// 위에까지 기본적인 react 환경세팅

// 기본적인 폴더 구조
> Components => 화면을 구성하는 최소단위들
> Layouts => header컴포넌트, footer컴포넌트, navigation 등등
> Providers => Store와 Theme(or Layout)디렉토디 생성
> reducers => action 내용과 reducer내용을 넣는 디렉토리
> saga => redux middle wara인 saga내용을 넣는 디렉토리
> pages => 페이지화면의 대표화면에 대한 컴포넌트
> utils => 커스텀 hook이라던가 데이터 정리할 수 있는 코드들 모음

## Providers
> rootProvider.js 파일 생성 => 페이지 컴포넌트에서 감싸줄 애들
>

##  Layouts
> ThemdLayout.jsx 파일 생성 => 페이지 컴포넌트를 감싸줄건데 UI(css)적인 부분담당


# Redux 기본세팅
npm install redux
npm install react-redux
npm install next-redux-wrapper
npm install redux-saga

npm install redux-devtools-extension
npm install axios

## Redux 세팅시에 가장 먼저 할 것?
store 만들기
> Providers -> createCtx.js    => 리덕스에서 가장 중요한 부분
//만든 것은 pages안의 _app.jsx에서 사용
wrapper.withRedux

> saga디렉토리에서 index.js 파일 생성(특별한 기능보다는 다른 미들웨어들을 묶어준다.)
// sagaeffect사용

** saga폴더에서 postSaga.js 파일생성 (실질적으로 기능을 담당하는 부분)

> reducers > index.js
파일 완성(reducer를 묶어주는 역할)
> reducers > post.js
post관련된 action 내용을 넣고
action.type에 따른 state를 바꾸는 작업을 함


// 서버사이드렌더링??????????????????????????????????????????????????????????


// 동적라우팅 -> 데이터가 오기 전에 페이지를 구현해서 error발생 -> 이러한 문제 때문에 서버사이드렌더링 필요



** reducer saga 순서*************************************************
reducer - getpost
reducer - getpost_request
saga -postsaga-getpost
saga-postSaga-getpostApi
saga-postSaga-getpostApi이후의 getpost
getpostrequest이후의 reducer-post-getpostsuccess
