import wrapper from '../Providers/createCtx'


const MyApp = ({Component,pageProps}) => {
    // pageProps => props값을 전달하기 위한 것
    return  <Component {...pageProps}/>
    
}

export default wrapper.withRedux(MyApp)