import React, {useEffect} from "react"
import './Posts.css'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Post from "./Post/Post";

function Posts(){
    // Получение постов, ошибки и статуса загрузки
    const {posts, error, loading} = useTypedSelector(state => state.post)

    // Получаю функции для получения постов, для лайков и для подгрузки комментариев
    const {fetchPosts, likePost, loadComments} = useActions()

    // Получаю посты
    useEffect(() => {
        fetchPosts()
    }, [])

    // Проверяю статус загрузки
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    // Проверяю статус ошибки
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="posts">
            {/*
                Вывожу посты, создавая под каждого компоненту Post
                А также передаю в них полученные ранее функции
            */}
            {posts.map((el: any, index: number)=>{
                return <Post loadComments={loadComments} likePost={likePost} key={index} post={el}/>
            })}
        </div>
    )
}

export default Posts;
