import React, {useEffect} from "react"
import './Posts.css'
import Post from "./Post/Post";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {loadComments} from "../../store/action-creators/post";

function Posts(){
    const {posts, error, loading} = useTypedSelector(state => state.post)
    const {fetchPosts, likePost, loadComments} = useActions()

    useEffect(() => {
        fetchPosts()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="posts">
            {posts.map((el, index)=>{
                return <Post loadComments={loadComments} likePost={likePost} key={index} post={el}/>
            })}
        </div>
    )
}

export default Posts;
