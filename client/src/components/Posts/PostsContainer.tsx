import React, {useEffect} from "react"
import './Posts.css'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Post from "./Post/Post";
import Posts from "./Posts";

function PostsContainer(){
    // Получение постов, ошибки и статуса загрузки
    const {posts, error, loading} = useTypedSelector(state => state.post)

    // Получаю функции для получения постов, для лайков и для подгрузки комментариев
    const {fetchPosts, likePost, loadComments} = useActions()

    return <Posts fetchPosts={fetchPosts}
                  likePost={likePost}
                  loadComments={loadComments}
                  posts={posts}
                  error={error}
                  loading={loading}/>
}

export default PostsContainer;
