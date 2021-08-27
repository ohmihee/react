import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import wrapper from '../Providers/createCtx'
import {GET_POST} from '../reducer/post'
import {END} from 'redux-saga'
import Link from 'next/link'

const posts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state=>state.post)
    const postLink = posts.map((v,k)=>{
        return(
            <li key={k}>
                <h2><Link href="/posts/[id]" as={`/posts/${v.id}`}><a>{v.title}</a></Link></h2>
                {/* <Link href={`/posts/${id}`}><a>{v.title}</a></Link> */}
                <span>{v.body}</span>
            </li>
        )
    })
    //componentDidMount()
    useEffect(()=>{
        function scrollFn(){
            console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight)
            // window.scrolly 스크롤의 위치
            // document.documentElement.clientHeight 눈에 보이는 높이
            // document.documentElement.scrollHeight 총 높이
            if((window.scrollY+document.documentElement.clientHeight)===document.documentElement.scrollHeight){
                dispatch(GET_POST())
                console.log('hello============================================')
            }
        }
        window.addEventListener('scroll',scrollFn)
        return () => {
            window.removeEventListener('scroll',scrollFn)
        }
    },[])

    return(
        <>
            <h1>Posts({posts.length})</h1>
            <ul>                
                {postLink}                
            </ul>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((Store)=>async (req,res)=>{
    // 첫번째는 dispatch써서 API요청을 보냄, 그리고 상태를 변경시킴
    // dispatch는 Store에 존재 
    //console.log(Store)
    Store.dispatch(GET_POST())
    // GET_POST의 결과값은 객체로 반환
    Store.dispatch(END)
    await Store.sagaTask.toPromise()
    // async는 마지막에 실행되는 함수 앞에 달아준다.
    //console.log('hellooooooooo')
})

export default posts