// [id].jsx
import {useRouter} from 'next/router'
import { useSelector,useDispatch } from 'react-redux'
import wrapper from '../../Providers/createCtx'
import { GET_POST_DETAIL } from '../../reducer/post'
import {END} from 'redux-saga'
import Link from 'next/link'


const Post = () => {
    //const router = useRouter()
    const post = useSelector(state=>state.post.postDetail)

    return(
        <>
            <h3>{post.title}</h3>
            <dl>
                <dt>{post.userId}</dt>
                <dd>{post.body}</dd>
            </dl>
            <Link href="/posts/"><a>목록가기</a></Link>
        </>
    )
}   


export const getServerSideProps = wrapper.getServerSideProps((Store)=> async (req,res)=>{
    const {id} = req.params
    console.log(id)
    Store.dispatch(GET_POST_DETAIL(id))
    Store.dispatch(END)
    await Store.sagaTask.toPromise()
})


export default Post